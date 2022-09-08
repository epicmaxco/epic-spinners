type ExecuteOptions = Partial<{
  /**
   * Show command output
   * @default false
   */
  output: boolean

  /**
   * Custom success message
   * @default '`command` exited with code `code`'
   */
  successMessage: string

  /**
   * Custom success message
   * @default '`command` exited with code `code`'
   */
  errorMessage: string
}>

const buildCommandFromTemplate = (template: TemplateStringsArray, ...args: any[]): string => {
  return template.reduce((acc, curr, i) => acc + curr + (args[i] ?? '').toString())
}

type ExecuteTemplate = (template: TemplateStringsArray, ...args: any[]) => Promise<string>
type ExecuteString = (command: string, options?: ExecuteOptions) => Promise<string>

export const defineExecute = (
  spawnFn: (command: string, options?: ExecuteOptions) => Promise<string>,
) => {
  return ((arg1: string | TemplateStringsArray, ...args: any[]) => {
    if (typeof arg1 === 'string') {
      return spawnFn(arg1, args[0])
    }

    if (Array.isArray(arg1)) {
      return spawnFn(buildCommandFromTemplate(arg1, ...args))
    }
  }) as ExecuteTemplate & ExecuteString
}
