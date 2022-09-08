import { spawn } from 'child_process'
import { defineExecute } from './defineExecute'
import chalk from 'chalk'

/**
 * Execute command
 *
 * @example
 *
 * ```ts
 * $('ls', { errorMessage: 'Woops!' })
 * ```
 *
 * ```ts
 * $`ls`
 * ```
 */
export const $ = defineExecute(
  (
    command,
    options = {
      output: false,
    },
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      console.info(`${chalk.bgCyan(' Executing ')} ${chalk.cyan(command)}`)

      const child = spawn(command, {
        shell: true,
      })

      let stdout = ''

      child.stdout?.on('data', (data) => {
        if (options.output) {
          process.stdout.write(data)
        }
        stdout += data
      })

      child.on('close', (code) => {
        if (code === 0) {
          if (options.successMessage) {
            console.info(`${chalk.bgGreen(' Success ')} ${options.successMessage}`)
          } else {
            console.info(`${chalk.bgGreen(' Success ')} ${command} exited with code ${code}`)
          }

          resolve(stdout)
        } else {
          if (options.errorMessage) {
            console.error(`${chalk.bgRed(' Error ')} ${options.errorMessage}`)
          } else {
            console.error(`${chalk.bgRed(' Error ')} ${command} exited with code ${code}`)
          }

          reject(stdout)
        }
      })
    })
  },
)
