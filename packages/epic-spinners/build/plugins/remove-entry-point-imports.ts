import { Plugin } from 'vite'

const cjsImportsRegex = /^require\(.*\);\n?/gm
const esmImportsRegex = /^import ["|'].*["|'];\n?/gm

export const removeEntryPointImports = (): Plugin => {
  return {
    name: 'epicSpinners:remove-entry-point-imports',

    renderChunk(code, chunk, options) {
      if (chunk.fileName.includes('/index')) {
        const importsRegex = options.format === 'cjs' ? cjsImportsRegex : esmImportsRegex
        return code.replace(importsRegex, '')
      }
    },
  }
}
