import vue from '@vitejs/plugin-vue'
import { LibraryOptions } from 'vite'
import { resolve } from 'path'
import type { RollupOptions } from 'rollup'
import { fixIifeBundleStyles } from '../plugins/fix-iife-bundle-styles'
import { transformCssFiles } from '../plugins/transform-css-files'
import { removeCssImports } from '../plugins/remove-css-imports'
import { removeEntryPointImports } from '../plugins/remove-entry-point-imports'
import { defineVitePlugin } from '../types/define-vite-plugin'
import { dependencies, parsePath } from '../helpers'
import type { BuildFormat } from '../types/types'

const libBuildOptions = (format: BuildFormat): LibraryOptions => ({
  entry: resolve(process.cwd(), 'src/index.ts'),
  formats: [format === 'cjs' ? 'cjs' : 'es'],
})

const rollupBuildOptions = (format: BuildFormat): RollupOptions => {
  const components = process.env.VUE_BUILD_COMPONENTS?.split(' ')

  return {
    external: dependencies,
    output: {
      dir: 'dist',
      format: format === 'cjs' ? 'cjs' : 'es',
      entryFileNames: format === 'esm-node' ? `${format}/index.mjs` : `${format}/index.js`,
      chunkFileNames: (chunkInfo) => {
        const ext = chunkInfo.name.includes('style/') ? 'css' : format === 'esm-node' ? 'mjs' : 'js'
        return `[name].${ext}`
      },
      assetFileNames: '[name].[ext]',
      manualChunks(id) {
        if (id.includes('plugin-vue:export-helper')) {
          return `${format}/plugin-vue_export-helper`
        }
        if (id.includes('src/services')) {
          const { name } = parsePath(id)
          return `${format}/services/${name}`
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
      outDir: `dist/${format}`,
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
