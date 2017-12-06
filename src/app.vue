<template>
  <div id="app">
    <img src="./assets/logo.png">
    <samples></samples>
  </div>
</template>

<script>
import Samples from './components/Samples'

export default {
  name: 'app',
  components: {
    Samples
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
