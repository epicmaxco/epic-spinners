import { Plugin } from 'vite'
import type { BuildFormat } from '../types/types'

export const moveCssFiles = (format: BuildFormat): Plugin => {
  return {
    name: 'epicSpinners:move-css-files',

    generateBundle(options, bundle) {
      Object.entries(bundle).forEach(([key, info]) => {
        if (info.type === 'asset' && info.fileName.endsWith('.css')) {
          bundle[key].fileName = bundle[key].fileName.replace(`${format}/components`, 'style')
        }
      })
    },
  }
}
