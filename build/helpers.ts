import { extname, dirname, basename, resolve } from 'path'
import { existsSync, readdirSync, lstatSync, readFileSync } from 'fs'

export const parsePath = (path: string) => {
  const ext = extname(path).replace('.', '')

  return {
    ext,
    dir: dirname(path),
    name: basename(path, `.${ext}`),
  }
}

const processEntry = (componentPath: string) => {
  if (!existsSync(componentPath)) {
    return
  }

  const { ext, name, dir } = parsePath(componentPath)

  if (ext === 'vue') {
    return { name, dir }
  }
}

export const processEntries = (componentsDir: string) => {
  let entries: Record<string, string>[] = []

  readdirSync(componentsDir).forEach((entryName) => {
    const currentPath = `${componentsDir}/${entryName}`

    if (lstatSync(currentPath).isDirectory()) {
      entries = [...entries, ...processEntries(currentPath)]
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
