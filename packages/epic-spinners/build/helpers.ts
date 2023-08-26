import { resolve, parse, join } from 'path'
import { existsSync, readdirSync, lstatSync, readFileSync } from 'fs'

const processEntry = (componentPath: string) => {
  if (!existsSync(componentPath)) {
    return
  }

  const { ext, name, dir } = parse(componentPath)

  if (ext === '.vue') {
    return { name, dir }
  }
}

export const generateComponentsList = (componentsDir: string) => {
  let entries: Record<string, string>[] = []

  readdirSync(componentsDir).forEach((entryName) => {
    const currentPath = join(componentsDir, entryName)

    if (lstatSync(currentPath).isDirectory()) {
      entries = [...entries, ...generateComponentsList(currentPath)]
    }

    const entry = processEntry(currentPath)

    if (entry) {
      entries.push(entry)
    }
  })

  return entries
}

const packageJSON = JSON.parse(readFileSync(resolve(process.cwd(), './package.json')).toString())
export const dependencies = [
  ...Object.keys(packageJSON.dependencies ?? {}),
  ...Object.keys(packageJSON.peerDependencies ?? {}),
]
