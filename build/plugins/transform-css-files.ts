import { Plugin } from 'vite'

const cssRegex = new RegExp('=> "(.*)"')

export const transformCssFiles = (): Plugin => {
  return {
    name: 'epicSpinners:transform-css-files',

    renderChunk(code, chunk) {
      if (chunk.fileName.includes('style/')) {
        return code.match(cssRegex)?.[1]?.replace(/\\n/gm, '')
      }
    },
  }
}
