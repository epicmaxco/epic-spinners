import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { Plugin } from 'vite'
import { parsePath } from '../helpers'
import type { BuildFormat } from '../types/types'

const processCjsEntryContent = (content: string) =>
  content
    .replace(/(^exports.* = cjs_components_.*)\..*(?=;$)/gm, '$1.default')
    .replace(/^require(.*);\n/gm, '')

const processEsEntryContent = (content: string) =>
  content
    .replace(/export { .* as/gm, 'export { default as')
    .replace(/^import ["|'].*["|'];\n/gm, '')

const processEntryContent = (content: string, format: BuildFormat) =>
  format === 'cjs' ? processCjsEntryContent(content) : processEsEntryContent(content)

const processEntry = (entryPath: string, format: BuildFormat) => {
  if (!existsSync(entryPath)) {
    return
  }

  const content = readFileSync(entryPath, 'utf8')
  const processedContent = processEntryContent(content, format)

  writeFileSync(entryPath, processedContent)
}

export const processComponentsDir = (componentsDir: string, format: BuildFormat) => {
  readdirSync(componentsDir).forEach((entryName) => {
    processComponent(`${componentsDir}/${entryName}`, entryName, format)
  })
}

const getRegexStrings = (format: BuildFormat, name: string, ext: string) => {
  if (format === 'cjs') {
    return {
      importStyleRegex: new RegExp(`require\\('../../style/${name}.js'\\);`),
      replacedImportStyleImport: `require('../../style/${name}.css');`,
      exportFileRegex: new RegExp(`exports.${name} = ${name};`),
      replacedExportFile: `exports.default = ${name};`,
    }
  }

  return {
    importStyleRegex: new RegExp(`import '../../style/${name}.${ext}';\n`),
    replacedImportStyleImport: format === 'es' ? `import '../../style/${name}.css';\n` : '',
    exportFileRegex: new RegExp(`export { ${name} as .* };`),
    replacedExportFile: `export { ${name} as default };`,
  }
}

const processComponent = (componentPath: string, entryName: string, format: BuildFormat) => {
  if (!existsSync(componentPath)) {
    return
  }

  const { ext, name } = parsePath(entryName)
  const { importStyleRegex, replacedImportStyleImport, exportFileRegex, replacedExportFile } =
    getRegexStrings(format, name, ext)

  const content = readFileSync(componentPath, 'utf8')
  const processedContent = content
    .replace(importStyleRegex, replacedImportStyleImport)
    .replace(exportFileRegex, replacedExportFile)

  writeFileSync(componentPath, processedContent)
}

export const processBundles = (format: BuildFormat): Plugin => {
  let outDir = ''
  const ext = format === 'esm-node' ? 'mjs' : 'js'

  return {
    name: 'epicSpinners:process-bundles',

    configResolved: (config) => {
      outDir = config.build.outDir
    },

    closeBundle: () => {
      processEntry(`${outDir}/${format}/index.${ext}`, format)
      processComponentsDir(`${outDir}/${format}/components`, format)
    },
  }
}
