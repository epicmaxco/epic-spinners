import { rmSync, existsSync, renameSync } from 'fs'

export const buildEnd = () => {
  // moving css to the dist root and remove unnecessary css
  const cjsStylesPath = './dist/cjs/style.css'
  existsSync(cjsStylesPath) && renameSync(cjsStylesPath, './dist/style.css')

  // remove unnecessary css
  const bundles = ['cjs', 'iife', 'esm-node', 'es']
  bundles.forEach((format) => {
    const stylePath = `./dist/${format}/style.css`
    existsSync(stylePath) && rmSync(stylePath)
  })

  // rename types
  const typesPath = './dist/lib.d.ts'
  existsSync(typesPath) && renameSync(typesPath, './dist/main.d.ts')
}
