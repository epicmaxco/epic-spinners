import { rmSync, existsSync } from 'fs'

export const buildEnd = () => {
  // deleting redundant css
  const stylesPath = './dist/style.css'
  existsSync(stylesPath) && rmSync(stylesPath)
}
