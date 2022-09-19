import { existsSync, readdirSync, readFileSync, writeFileSync, rmSync } from 'fs'
import { Plugin } from 'vite'
import { parsePath } from '../helpers'

const generateImportStylesString = (styleContent: string) => `
var __vite_style__ = document.createElement('style');
__vite_style__.innerHTML = \`${styleContent.trim()}\`;
document.head.appendChild(__vite_style__);`

const styleRowRegex = /^\s*var .*_vue_vue_type_style_index_0_lang.*\)\(\);$/gm

const processFiles = (jsPath: string, stylePath: string) => {
  if (!existsSync(jsPath) || !existsSync(stylePath)) {
    return
  }

  const styleContent = readFileSync(stylePath, 'utf8')
  const jsContent = readFileSync(jsPath, 'utf8')

  const importStyleString = generateImportStylesString(styleContent)
  const cleanedJsContent = jsContent.replace(styleRowRegex, '')
  const processedContent = `${importStyleString}\n${cleanedJsContent}`

  writeFileSync(jsPath, processedContent)
  rmSync(stylePath)
}

export const processDir = (bundleDir: string) => {
  let jsPath = ''
  let stylePath = ''

  readdirSync(bundleDir).forEach((entryName) => {
    const { ext } = parsePath(entryName)
    if (ext === 'js') {
      jsPath = `${bundleDir}/${entryName}`
    }
    if (ext === 'css') {
      stylePath = `${bundleDir}/${entryName}`
    }
  })

  jsPath && stylePath && processFiles(jsPath, stylePath)
}

export const processIifeBundle = (): Plugin => {
  let outDir = ''

  return {
    name: 'epicSpinners:process-iife-bundle',

    configResolved: (config) => {
      outDir = config.build.outDir
    },

    closeBundle: () => {
      processDir(outDir)
    },
  }
}
