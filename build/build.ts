import { $ } from './execute'
import { defineLibBuild } from './types/define-lib-build'
import { buildStart } from './steps/buildStart'
import { buildEnd } from './steps/buildEnd'

defineLibBuild(async () => {
  buildStart()

  await $('npm run types:check', { successMessage: 'types checked' })
  await Promise.all([
    $('npm run build:types', { successMessage: 'types built' }),
    $('vite build --config ./build/configs/vite.cjs.ts', { successMessage: 'cjs built' }),
    $('vite build --config ./build/configs/vite.iife.ts', { successMessage: 'iife built' }),
    $('vite build --config ./build/configs/vite.mjs.ts', { successMessage: 'esm-node built' }),
    $('vite build --config ./build/configs/vite.es.ts', { successMessage: 'esm built' }),
  ])

  buildEnd()
})
