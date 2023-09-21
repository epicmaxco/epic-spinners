<template>
  <div class="loaders-header">
    <div class="top-line align-items-center">
      <div class="text-left ">
        <a href="https://github.com/epicmaxco/epic-spinners" target="_blank" class="github-button flex">
          <i class="fa fa-github" aria-hidden="true"></i>Fork on GitHub
        </a>
      </div>

      <div class="text-center title">Epic Spinners</div>
      <div class="text-right">
        <div class="links-wrapper">
          <router-link class="main-link" v-if="$route.path === '/get-started'" to="/">Gallery</router-link>
          <router-link class="main-link" v-if="$route.path === '/'" to="get-started">Get Started</router-link>
        </div>
      </div>
    </div>
    <div class="text-center sub-line">
      Css only. Easy to use. VueJS integration.
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'loaders-header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style  lang="scss">
@import "../sass/variables";
.loaders-header {
  padding-top: 20px;
  margin-bottom: 30px;
  .title {
    font-size: $font-size-xxl;
  }
  .sub-line {
    color: $text-color-dark;
    font-size: $font-size-xl;
  }
  .top-line {
    @include flexbox;
    @include justify-content(space-between);
    .links-wrapper {
      @include flexbox;
      min-width: 140px;

      /*a:first-child {*/
        /*margin-right: 16px;*/
      /*}*/
    }
  }
}
@media (max-width: $screen-xs-max) {
  .loaders-header {
    .top-line {
      flex-direction: column;
      .title {
        margin: 10px 0;
      }
      .links-wrapper {
        display: block;
        text-align: center;
        margin: 0 0 10px;
        .main-link {
          margin: 0;
        }
      }
    }
  }
}
</style>
