import { rmSync, existsSync, renameSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { parsePath } from '../helpers'

export const buildEnd = () => {
  // extract css from chunks
  const styleDir = 'dist/style'
  const cssRegex = new RegExp('=> "(.*)"')

  readdirSync(styleDir).forEach((entryName) => {
    const { name } = parsePath(entryName)

    if (entryName.endsWith('.mjs')) {
      const content = readFileSync(`${styleDir}/${entryName}`, 'utf8')
      const cssContent = content.match(cssRegex)?.[1]?.replace(/\\n/gm, '')
      cssContent && writeFileSync(`${styleDir}/${name}.css`, cssContent)
    }

    rmSync(`${styleDir}/${entryName}`)
  })

  // rename types
  const typesPath = './dist/lib.d.ts'
  existsSync(typesPath) && renameSync(typesPath, './dist/index.d.ts')
}
