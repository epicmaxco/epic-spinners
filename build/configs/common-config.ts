import vue from '@vitejs/plugin-vue'
import { LibraryOptions } from 'vite'
import { resolve } from 'path'
import type { RollupOptions } from 'rollup'
import { processBundles } from '../plugins/process-bundles'
import { processIifeBundle } from '../plugins/process-iife-bundle'
import { defineVitePlugin } from '../types/define-vite-plugin'
import { dependencies } from '../helpers'
import type { BuildFormat } from '../types/types'

const libBuildOptions = (format: BuildFormat): LibraryOptions => ({
  entry: resolve(process.cwd(), `src/lib.ts`),
  fileName: () => 'index.js',
  formats: [format === 'cjs' ? 'cjs' : 'es'],
  name: 'epicSpinners',
})

const rollupBuildOptions = (format: BuildFormat): RollupOptions => {
  const components = process.env.VUE_BUILD_COMPONENTS?.split(' ')

  return {
    external: dependencies,
    output: {
      dir: 'dist',
      format: format === 'cjs' ? 'cjs' : 'es',
      entryFileNames: format === 'esm-node' ? `${format}/index.mjs` : `${format}/index.js`,
      chunkFileNames: format === 'esm-node' ? '[name].mjs' : '[name].js',
      assetFileNames: '[name].[ext]',
      manualChunks(id) {
        if (id.includes('src/services')) {
          return `${format}/services`
        }
        if (id.includes('plugin-vue:export-helper')) {
          return `${format}/plugin-vue_export-helper`
        }
        if (components) {
          const chunk = components.find((name) => id.includes(name))
          const isStyle = id.includes('type=style')
          return chunk ? (isStyle ? `style/${chunk}` : `${format}/components/${chunk}`) : undefined
        }
      },
    },
  }
}

export const createViteConfig = (format: BuildFormat) => {
  return defineVitePlugin({
    publicDir: false,
    build: {
      lib: libBuildOptions(format),
      rollupOptions: rollupBuildOptions(format),
      minify: false,
      target: 'esnext',
    },
    plugins: [vue(), processBundles(format)],
  })
}

export const createIifeViteConfig = () => {
  const format: BuildFormat = 'iife'

  return defineVitePlugin({
    publicDir: false,
    build: {
      outDir: `dist/${format}`,
      sourcemap: true,
      target: 'esnext',
      lib: {
        entry: resolve(process.cwd(), `src/lib.ts`),
        fileName: () => 'index.js',
        formats: [format],
        name: 'epicSpinners',
      },
      rollupOptions: {
        external: dependencies,
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    plugins: [vue(), processIifeBundle()],
  })
}
