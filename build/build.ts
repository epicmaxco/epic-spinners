import { $ } from './execute'
import { resolve } from 'path'
import { defineLibBuild } from './types/define-lib-build'
import { buildStart } from './steps/buildStart'
import { buildEnd } from './steps/buildEnd'
import { processEntries } from './helpers'

defineLibBuild(async () => {
  buildStart()

  const entries = processEntries(resolve(process.cwd(), 'src/components'))
  process.env['VUE_BUILD_COMPONENTS'] = entries.map(({ name }) => name).join(' ')

  await $('npm run types:check', { successMessage: 'types checked' })
  await Promise.all([
    $(`vite build --config ./build/configs/vite.cjs.ts`, { successMessage: 'cjs built' }),
    $(`vite build --config ./build/configs/vite.iife.ts`, { successMessage: 'iife built' }),
    $(`vite build --config ./build/configs/vite.mjs.ts`, { successMessage: 'esm-node built' }),
    $(`vite build --config ./build/configs/vite.es.ts`, { successMessage: 'esm built' }),
  ])
  await $('npm run build:types', { successMessage: 'types built' })

  buildEnd()
})
