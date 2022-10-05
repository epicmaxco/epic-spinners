import fs from 'fs'
import path from 'path'
import semver from 'semver'
import { exec } from 'child_process'

export const bumpPackageJsonVersion = (filePath: string, newVersion: string) => {
  // Bump patch .version in package.json.
  const packageJsonPath = path.resolve(process.cwd(), filePath)
  const packageJson: { version: string } = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  packageJson.version = newVersion
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
  console.log('Library package.json version has been updated')
}

export const getRecommendedNodeVersion = (): string => {
  const packageJsonPath = path.resolve(process.cwd(), './.nvmrc')
  return fs.readFileSync(packageJsonPath).toString().trim()
}

export const getPackageJsonVersion = (): string => {
  const packageJsonPath = path.resolve(process.cwd(), './package.json')
  // Coerce keeps only 1.2.3 from full version string - useful in case we sit on some weird version.
  return semver.coerce(JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8')).version)
}

export const executeCommand = (command: string): Promise<string> => {
  let _resolve: any
  let _reject: any
  exec(command, (err: any, stdout: any, stderr: any) => {
    if (err) {
      // on error
      _reject(err)
    } else {
      // the *entire* stdout and stderr (buffered)
      _resolve(stdout.trim())
    }
  })

  return new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
  })
}

export const executeAndLog = async (command: string): Promise<void> => {
  console.log(`Executing command: ${command}`)
  const result = await executeCommand(command)
  console.log(result)
}

export const getCommitHash = () => executeCommand('git rev-parse --short HEAD')
