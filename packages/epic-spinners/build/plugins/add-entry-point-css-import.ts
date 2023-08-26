import { Plugin } from 'vite'
import type { BuildFormat } from '../types/types'

const cjsImportString = `require('../style.css');`
const esmImportString = `import '../style.css';`

export const addEntryPointCssImport = (format: BuildFormat): Plugin => {
  return {
    name: 'epicSpinners:add-entry-point-css-import',

    renderChunk(code, chunk, options) {
      if (chunk.fileName.includes('/index')) {
        return format === 'cjs'
          ? code.replace(`'use strict';`, `'use strict';\n${cjsImportString}`)
          : `${esmImportString}\n${code}`
      }
    },
  }
}
