export default {
  appendKeyframes: function (name, frames) {
    document.styleSheets[document.styleSheets.length - 1].insertRule('@keyframes ' + name + ' { ' + frames + ' }')
  }
}
