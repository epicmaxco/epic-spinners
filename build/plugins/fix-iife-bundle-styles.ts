import { existsSync, readdirSync, readFileSync, writeFileSync, rmSync } from 'fs'
import { parse, join } from 'path'
import { Plugin } from 'vite'

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

const processDir = (bundleDir: string) => {
  let jsPath = ''
  let stylePath = ''

  readdirSync(bundleDir).forEach((entryName) => {
    const { ext } = parse(entryName)
    if (ext === '.js') {
      jsPath = join(bundleDir, entryName)
    }
    if (ext === '.css') {
      stylePath = join(bundleDir, entryName)
    }
  })

  jsPath && stylePath && processFiles(jsPath, stylePath)
}

export const fixIifeBundleStyles = (): Plugin => {
  let outDir = ''

  return {
    name: 'epicSpinners:fix-iife-bundle-styles',

    configResolved: (config) => {
      outDir = config.build.outDir
    },

    closeBundle: () => {
      processDir(outDir)
    },
  }
}
