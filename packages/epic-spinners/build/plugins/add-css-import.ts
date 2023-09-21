import { Plugin } from 'vite'
import { parse } from 'path'
import type { BuildFormat } from '../types/types'

const generateCssImportSting = (format: BuildFormat, name: string) =>
  format === 'cjs' ? `require('../../style/${name}.css');` : `import '../../style/${name}.css';`

export const addCssImport = (format: BuildFormat): Plugin => {
  return {
    name: 'epicSpinners:add-css-import',

    renderChunk(code, chunk) {
      if (chunk.fileName.includes('components/')) {
        const { name } = parse(chunk.fileName)
        const cssImportString = generateCssImportSting(format, name)

        return format === 'cjs'
          ? code.replace(`'use strict';`, `'use strict';\n${cssImportString}`)
          : `${cssImportString}\n${code}`
      }
    },
  }
}
