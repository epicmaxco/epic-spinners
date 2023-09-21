export default {
  /**
   * Add keyframes to body as style block
   * @param name string
   * @param frames string
   */
  appendKeyframes: (name: string, frames: string) => {
    if (!window?.document) {
      return
    }

    const sheet = document.createElement('style')
    sheet.setAttribute('id', name)
    sheet.innerHTML = `@keyframes ${name} {${frames}}`
    document.body.appendChild(sheet)
  },

  /**
   * Remove keyframes from body
   * @param name string
   */
  removeKeyframes: (name: string) => {
    if (!window?.document) {
      return
    }

    const sheet = document.getElementById(name)
    if (!sheet) {
      return
    }
    sheet.parentNode?.removeChild(sheet)
  },
}
