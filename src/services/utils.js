export default {
  appendKeyframes (name, frames) {
    var idx = document.styleSheets[0].cssRules.length
    document.styleSheets[0].insertRule(`@keyframes ${name} { ${frames} }`, idx)
  }
}
