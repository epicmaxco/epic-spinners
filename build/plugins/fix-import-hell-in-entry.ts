import { existsSync, readdirSync, readFileSync, writeFileSync, lstatSync } from 'fs'
import { Plugin } from 'vite'

const processFile = (componentPath: string) => {
  if (!existsSync(componentPath)) {
    return
  }

  const componentContent = readFileSync(componentPath, 'utf8')
  writeFileSync(componentPath, componentContent.replace(/import ["|'].*["|'];\n/gm, ''))
}

export const processFiles = (bundleDir: string) => {
  readdirSync(bundleDir).forEach((entryName) => {
    if (entryName.includes('main')) {
      const currentPath = `${bundleDir}/${entryName}`
      processFile(currentPath)
    }
  })
}

export const fixImportHellInEntry = (): Plugin => {
  let outDir = ''

  return {
    name: 'epicSpinners:fix-import-hell-in-entry',

    configResolved: (config) => {
      outDir = config.build.outDir
    },

    closeBundle: () => {
      processFiles(`${outDir}`)
    },
  }
}
