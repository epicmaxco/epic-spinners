import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'fs'
import { resolve as resolver } from 'path'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import { appendComponentCss } from './plugins/append-component-css'
import { fixImportHellInEntry } from './plugins/fix-import-hell-in-entry'
import { defineVitePlugin } from './types/define-vite-plugin'
import type { RollupOptions } from 'rollup'

export type BuildFormat = 'iife' | 'es' | 'cjs' | 'esm-node'

const packageJSON = JSON.parse(readFileSync(resolver(process.cwd(), './package.json')).toString())
const dependencies = [
  ...Object.keys(packageJSON.dependencies ?? {}),
  ...Object.keys(packageJSON.peerDependencies ?? {}),
]

const libBuildOptions = (format: BuildFormat) => ({
  entry: resolver(process.cwd(), 'src/lib.ts'),
  fileName: () => 'main.js',
  formats: [format === 'esm-node' ? 'es' : format],
  name: 'epicSpinners',
})

const rollupBuildOptions = (format: BuildFormat): RollupOptions => {
  const config: RollupOptions = {
    external: dependencies,
  }

  const mjsBuildOptions: RollupOptions = {
    output: {
      dir: 'dist/esm-node',
      format: 'es',
      entryFileNames: 'main.mjs',
      chunkFileNames: '[name].mjs',
      assetFileNames: '[name].[ext]',
    },
  }

  const iifeBuildOptions: RollupOptions = {
    output: {
      globals: {
        vue: 'Vue',
      },
    },
  }

  return {
    ...config,
    ...(format === 'iife' && iifeBuildOptions),
    ...(format === 'esm-node' && mjsBuildOptions),
  }
}

export default function createViteConfig(format: BuildFormat) {
  const isEs = format === 'es'
  const isIife = format === 'iife'
  const isNode = format === 'esm-node'

  return defineVitePlugin({
    publicDir: false,
    build: {
      outDir: `dist/${format}`,
      cssCodeSplit: isEs || isIife,
      sourcemap: !isEs && !isNode,
      target: 'esnext',
      rollupOptions: rollupBuildOptions(format),
      lib: libBuildOptions(format),
    },
    plugins: [
      vue(),
      (isEs || isNode) && chunkSplitPlugin({ strategy: 'unbundle' }),
      isEs && appendComponentCss(),
      (isEs || isNode) && fixImportHellInEntry(),
    ],
  })
}
