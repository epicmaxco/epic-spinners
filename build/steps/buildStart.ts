import { existsSync, rmSync } from 'fs'

export const buildStart = () => {
  existsSync('./dist') && rmSync('./dist', { recursive: true })
}
