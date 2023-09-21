<template>
  <loaders-header class="container"/>
  <router-view class="container"/>
  <loaders-footer/>
</template>

<script lang="ts">
import LoadersHeader from './components/LoadersHeader.vue'
import LoadersFooter from './components/LoadersFooter.vue'

export default {
  name: 'app',
  components: {
    LoadersHeader,
    LoadersFooter
  }
}
</script>

<style lang="scss">
@import "sass/main.scss";


</style>
