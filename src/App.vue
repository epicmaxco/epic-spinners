<template>
  <img src="./assets/logo.png" class="app__logo" />
  <SpinnerSamples />
</template>

<script lang="ts">
import SpinnerSamples from './components/SpinnerSamples.vue'

export default {
  name: 'App',
  components: {
    SpinnerSamples,
  },
}
</script>

<style>
.app__logo {
  width: 5rem;
  height: auto;
}
</style>
