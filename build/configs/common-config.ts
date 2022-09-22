import vue from '@vitejs/plugin-vue'
import { LibraryOptions } from 'vite'
import { resolve, parse, join } from 'path'
import type { RollupOptions } from 'rollup'
import { fixIifeBundleStyles } from '../plugins/fix-iife-bundle-styles'
import { transformCssFiles } from '../plugins/transform-css-files'
import { removeCssImports } from '../plugins/remove-css-imports'
import { removeEntryPointImports } from '../plugins/remove-entry-point-imports'
import { defineVitePlugin } from '../types/define-vite-plugin'
import { dependencies, generateComponentsList } from '../helpers'
import type { BuildFormat } from '../types/types'

const components = generateComponentsList(resolve(process.cwd(), 'src/components')).map(
  ({ name }) => name,
)

const libBuildOptions = (format: BuildFormat): LibraryOptions => ({
  entry: resolve(process.cwd(), 'src/index.ts'),
  formats: [format === 'cjs' ? 'cjs' : 'es'],
})

const rollupBuildOptions = (format: BuildFormat): RollupOptions => {
  return {
    external: dependencies,
    output: {
      dir: 'dist',
      format: format === 'cjs' ? 'cjs' : 'es',
      entryFileNames: join(format, `index.${format === 'esm-node' ? 'mjs' : 'js'}`),
      minifyInternalExports: false,
      assetFileNames: '[name].[ext]',
      chunkFileNames: (chunkInfo) => {
        if (chunkInfo.name.startsWith('style')) {
          return '[name].css'
        }
        return `[name].${format === 'esm-node' ? 'mjs' : 'js'}`
      },
      manualChunks(id) {
        if (id.includes('plugin-vue:export-helper')) {
          return join(format, 'plugin-vue_export-helper')
        }
        if (id.includes('services')) {
          const { name } = parse(id)
          return join(format, 'services', name)
        }
        if (components) {
          const chunk = components.find((name) => id.includes(name))
          if (chunk && id.includes('type=style')) {
            return join('style', chunk)
          }
          return chunk && join(format, 'components', chunk)
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
      emptyOutDir: false,
    },
    plugins: [
      vue(),
      transformCssFiles(),
      removeEntryPointImports(),
      format === 'esm-node' && removeCssImports(),
    ],
  })
}

export const createIifeViteConfig = () => {
  const format: BuildFormat = 'iife'

  return defineVitePlugin({
    publicDir: false,
    build: {
      outDir: join('dist', format),
      sourcemap: true,
      target: 'esnext',
      emptyOutDir: false,
      lib: {
        entry: resolve(process.cwd(), 'src/index.ts'),
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
    plugins: [vue(), fixIifeBundleStyles()],
  })
}