import { Plugin } from 'vite'

const cssImportsRegex = /^import ["|'].*.css["|'];\n/gm

export const removeCssImports = (): Plugin => {
  return {
    name: 'epicSpinners:remove-css-imports',

    renderChunk(code, chunk) {
      if (chunk.fileName.includes('components/')) {
        return code.replace(cssImportsRegex, '')
      }
    },
  }
}
