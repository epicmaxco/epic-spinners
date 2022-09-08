import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { extname, dirname, basename } from 'path'
import { Plugin } from 'vite'

const parsePath = (path: string) => {
  const ext = extname(path).replace('.', '')

  return {
    ext,
    dir: dirname(path),
    name: basename(path, `.${ext}`),
  }
}

const prependBeforeContent = (content: string, prepend: string): string => `${prepend}\n${content}`

const appendCssImportToComponent = (componentPath: string) => {
  if (!existsSync(componentPath)) {
    return
  }

  const { name, dir } = parsePath(componentPath)
  const cssFilePath = `${dir}/${name}.css`

  if (!existsSync(cssFilePath)) {
    return
  }

  const componentContent = readFileSync(componentPath, 'utf8')
  writeFileSync(componentPath, prependBeforeContent(componentContent, `import "./${name}.css";`))
}

export const appendCssImportToComponentsDir = (componentsDir: string) => {
  readdirSync(componentsDir).forEach((entryName) => {
    const { ext } = parsePath(entryName)

    if (ext === 'js') {
      appendCssImportToComponent(`${componentsDir}/${entryName}`)
    }
  })
}

export const appendComponentCss = (): Plugin => {
  let outDir = ''

  return {
    name: 'epicSpinners:append-component-css',
    apply: 'build',
    configResolved: (config) => {
      outDir = config.build.outDir
    },
    closeBundle: () => {
      const componentsDir = `${outDir}/src/components`
      existsSync(componentsDir) && appendCssImportToComponentsDir(componentsDir)
    },
  }
}
