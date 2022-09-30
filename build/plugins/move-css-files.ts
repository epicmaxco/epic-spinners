import { Plugin } from 'vite'

export const moveCssFiles = (): Plugin => {
  return {
    name: 'epicSpinners:move-css-files',

    generateBundle(options, bundle) {
      if (options.format === 'cjs') {
        Object.entries(bundle).forEach(([key, info]) => {
          if (info.type === 'asset' && info.fileName.endsWith('.css')) {
            bundle[key].fileName = bundle[key].fileName.replace('cjs/components', 'style')
          }
        })
      } else {
        Object.entries(bundle).forEach(([key, info]) => {
          if (info.type === 'asset' && info.fileName.endsWith('.css')) {
            delete bundle[key]
          }
        })
      }
    },
  }
}
