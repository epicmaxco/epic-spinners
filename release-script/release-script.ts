import {
  bumpPackageJsonVersion,
  executeAndLog,
  getPackageJsonVersion,
  executeCommand,
  getCommitHash,
  getRecommendedNodeVersion,
} from './utils'

import semver from 'semver'
import inquirer, { DistinctQuestion } from 'inquirer'
import chalk from 'chalk'

export type ReleaseType = 'large' | 'tiny' | 'next' | 'experimental'

export type ReleaseConfig = {
  version: string // 1.2.3
  distTag: 'latest' | 'next' | 'experimental'
  gitTag: string // v1.2.3
  branch: string // 'develop'
  requiredBranch: string // 'develop'
  commit: string // '12345678'
  shouldCommit: boolean
  showSleepCheck: boolean
}

const gitTagFromVersion = (version: string) => `v${version}`

const incrementVersion = (version: string, type: 'major' | 'minor' | 'patch'): string => {
  const result = semver.inc(version, type)
  if (!result) {
    throw new Error(`Unable to increment ${type} version on '${version}'`)
  }
  return result
}

const getReleaseConfig = async (releaseType: ReleaseType): Promise<ReleaseConfig> => {
  const currentBranchName = await executeCommand('git rev-parse --abbrev-ref HEAD')
  // 20220602
  const dateIsoShort = new Date().toISOString().split('T')[0].replace(/-/g, '')
  // 12a4dd78
  const commitHash = await getCommitHash()
  // 1.2.3
  const currentVersion = getPackageJsonVersion()

  let result: Partial<ReleaseConfig> | null = null

  if (releaseType === 'large') {
    const version = incrementVersion(currentVersion, 'minor')
    result = {
      version,
      gitTag: gitTagFromVersion(version),
      distTag: 'latest',
      shouldCommit: true,
      requiredBranch: 'master',
      showSleepCheck: true,
    }
  }
  if (releaseType === 'tiny') {
    const version = incrementVersion(currentVersion, 'patch')
    result = {
      version,
      gitTag: gitTagFromVersion(version),
      distTag: 'latest',
      shouldCommit: true,
      requiredBranch: 'develop',
      showSleepCheck: true,
    }
  }
  if (releaseType === 'next') {
    const version = incrementVersion(currentVersion, 'patch')
    result = {
      version: `${version}-next-${commitHash}-${dateIsoShort}`,
      gitTag: undefined,
      distTag: 'next',
      shouldCommit: false,
      requiredBranch: 'develop',
      showSleepCheck: false,
    }
  }
  if (releaseType === 'experimental') {
    result = {
      version: `0.0.0-experimental-${commitHash}-${dateIsoShort}`,
      gitTag: undefined,
      distTag: 'experimental',
      shouldCommit: false,
      requiredBranch: undefined,
      showSleepCheck: false,
    }
  }

  result!.branch = currentBranchName
  result!.commit = commitHash

  return result! as ReleaseConfig
}

const confirmRelease = async () =>
  simplePrompt<boolean>({
    type: 'confirm',
    default: false,
    message: 'Please check release details are correct. All good?',
  })

const confirmNode = async () => {
  const current = await executeCommand('node -v')
  const recommended = getRecommendedNodeVersion()
  return current === recommended
}

const confirmTagAvailable = async (tagName: string): Promise<boolean> => {
  const result = await executeCommand('git ls-remote --tags upstream')
  return !result.match(new RegExp(`refs\\/tags\\/${tagName}\\b`))
}

const confirmNpmVersionAvailable = async (distTag: string): Promise<boolean> => {
  return !(await executeCommand(`npm view epic-spinners@${distTag}`))
}

// Check if we have correct state to go for release
const runReleaseChecks = async (releaseConfig: ReleaseConfig, dryRun: boolean) => {
  const { branch, requiredBranch, showSleepCheck, gitTag, version } = releaseConfig

  if (!dryRun && requiredBranch && branch !== requiredBranch) {
    console.log(chalk.red(`${branch} is incorrect for this flow, use ${requiredBranch} instead`))
    return false
  }
  if (!(await confirmNode())) {
    console.log(
      chalk.red(
        `Your node version is incorrect. You can use "nvm use" in the root of the project to set the proper one.`,
      ),
    )
    return false
  }
  try {
    await executeCommand(`git remote show upstream`)
  } catch (e) {
    console.log(
      chalk.red(
        `It doesn't seem you have "upstream" remote. Maybe yours is named differently? (you can rename it via "git remote rename your-name upstream")`,
      ),
    )
    return false
  }
  if (gitTag && !(await confirmTagAvailable(gitTag))) {
    console.log(
      chalk.red(`Tag ${gitTag} is already on upstream. You can remove it if it was by mistake.`),
    )
    return false
  }
  if (!(await confirmNpmVersionAvailable(version))) {
    console.log(
      chalk.red(`Version ${version} is already on NPM, you can bump version manually to fix that.`),
    )
    return false
  }
  try {
    await executeCommand('git diff-index --quiet HEAD --')
  } catch (e) {
    console.log(
      chalk.red('You have uncommitted changes, please commit before attempting to release.'),
    )
    return false
  }
  if (!(await confirmRelease())) {
    return false
  }
  if (showSleepCheck && !(await checkIfTooLate())) {
    return false
  }
  return true
}

const runReleaseScript = async (releaseConfig: ReleaseConfig, dryRun: boolean) => {
  const { version, gitTag, distTag, shouldCommit } = releaseConfig

  // **** Attempt building dist ****

  if (dryRun) {
    console.log(chalk.yellow('Skipping build because dry-run'))
  } else {
    // For test it's pain to wait for build as you can test build separately.
    await executeAndLog('npm run build')
  }

  // **** Update version strings ****

  console.log(chalk.white(`Bumping version to ${version}`))
  bumpPackageJsonVersion('./package.json', version)

  // **** Git updates ****

  console.log(chalk.white('Committing updates'))
  if (!dryRun) {
    if (shouldCommit) {
      await executeAndLog(`git commit -am "chore: bump version to ${gitTag}"`)
      // TODO: Maybe save remote name in .env or pass as arg.
      await executeAndLog(`git push upstream`)
    }
    if (gitTag) {
      await executeAndLog(`git tag ${gitTag}`)
      await executeAndLog(`git push upstream ${gitTag}`)
    }
  }

  // **** Publishing on npm ****

  await executeAndLog(`npm publish --tag=${distTag} --verbose${dryRun ? ' --dry-run' : ''}`)

  // **** Cleanup ****

  await executeAndLog('git reset --hard HEAD')

  console.log(chalk.green('Released - 😎 GLORIOUS SUCCESS 😎'))
}

const simplePrompt = async <T>(question: DistinctQuestion<T>): Promise<T> => {
  const result = await inquirer.prompt({
    name: 'question',
    ...question,
  })
  // Inquirer typing is pure pain.
  return (result as unknown as { question: T }).question
}
const inquireReleaseType = async () =>
  simplePrompt<ReleaseType>({
    type: 'list',
    message: 'Select build type',
    choices: ['experimental', 'next', 'tiny', 'large'],
    default: 'experimental',
  })
const inquireDryRun = async () =>
  simplePrompt<boolean>({
    type: 'confirm',
    default: false,
    message: "Do you want a dry-run? (there won't be any non reversible changes)",
  })
const checkIfTooLate = async () => {
  const result = await simplePrompt<boolean | undefined>({
    type: 'confirm',
    default: false,
    when: () => new Date().getHours() > 20,
    message: "It's too late already, sure you're up for release at this time?",
  })
  if (result === undefined) {
    return true
  }
  return result
}

;(async () => {
  const releaseType = await inquireReleaseType()
  const dryRun = await inquireDryRun()
  const releaseConfig = await getReleaseConfig(releaseType)

  console.table(releaseConfig)

  if (!(await runReleaseChecks(releaseConfig, dryRun))) {
    return
  }

  await runReleaseScript(releaseConfig, dryRun)
})()
