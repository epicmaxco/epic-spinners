import fs from 'fs'
import { resolve } from 'path'

let viteConfig
let cssFile

export default function () {
  return {
    name: 'lib-css',
    apply: 'build',
    enforce: 'post',

    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig
    },

    writeBundle(option, bundle) {
      if (!viteConfig.build || !viteConfig.build.lib) {
        // only for lib build
        console.warn('vite-plugin-libcss only works in lib mode.')
        return
      }
      if (option.format !== 'es' && option.format !== 'cjs') {
        // only for es built
        return
      }
      const files = Object.keys(bundle)
      cssFile = cssFile ?? files.find((v) => v.endsWith('.css'))
      if (!cssFile) {
        return
      }
      for (const file of files) {
        if (!bundle[file].isEntry) {
          // only for entry
          continue
        }

        const outDir = viteConfig.build.outDir || 'dist'
        const filePath = resolve(viteConfig.root, outDir, file)
        const data = fs.readFileSync(filePath, {
          encoding: 'utf8',
        })
        const resolvedData =
          option.format === 'es'
            ? `import './${cssFile}';\n${data}`
            : data.replace('"use strict";', `"use strict";\nrequire('./${cssFile}');`)
        fs.writeFileSync(filePath, resolvedData)
      }
    },
  }
}
