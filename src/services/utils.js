export default {
  appendKeyframes: function (name, frames) {
    let sheet = document.createElement('style')
    sheet.setAttribute('id', name)
    sheet.innerHTML = `@keyframes ${name} {${frames}}`
    document.body.appendChild(sheet)
  },
  removeKeyframes: function (name) {
    const sheet = document.getElementById(name)
    const sheetParent = sheet.parentNode
    sheetParent.removeChild(sheet)
  }
}
