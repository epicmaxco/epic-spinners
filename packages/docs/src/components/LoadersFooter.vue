<template>
  <div class="loaders-footer">
    <div class="top-line">
      <div class="container vuestic-container">
        <div class="row vuestic-row">
          <div class="left-part col-sm-12 col-lg-6">
            <div class="vuestic-text">Epic Spinners perfectly fit <br/> Vuestic Admin Theme.</div>
            <div class="links-wrapper">
              <a href="https://github.com/epicmaxco/vuestic-admin" target="_blank" class="github-button flex">
                <i class="fa fa-github" aria-hidden="true"></i>Vuestic on GitHub
              </a>
              <a href="https://vuestic.epicmax.co" target="_blank" class="github-button flex">
                <i class="fa fa-star" aria-hidden="true"></i>Vuestic Demo
              </a>
            </div>
          </div>
          <div class="right-part d-none d-lg-block col-lg-6">
            <img class="vuestic-main" src="../assets/img/vuestic.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="sub-line">
      <div class="container">
        <div class="left-part">
          ©{{currentYear}}. Developed by <a href="http://epicmax.co" target="_blank" class="main-link">Epicmax. </a> Designed by <a href="https://xxsavitski.myportfolio.com" target="_blank" class="main-link">Vasili Savitski.</a>
        </div>
        <div class="right-part"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'loaders-footer',
    computed: {
      currentYear () {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style  lang="scss">
@import "../sass/variables";

.loaders-footer {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  .top-line {
    background-color: $brand-main-color-dark;
    height: $footer-main-height;
    .vuestic-row {
      width: 100%;
    }
    .container.vuestic-container {
      height: 100%;
      @include flexbox;
      .left-part {
        @include flexbox;
        flex-direction: column;
        justify-content: center;
        .vuestic-text {
          font-size: $font-size-xl;
          font-weight: bold;
          margin-bottom: 15px;
          padding-right: 60px;
        }
        .links-wrapper {
          @include flexbox;
          @include align-items(center);
          .github-button {
            margin-right: 24px;
          }
        }
      }
      .right-part {
        position: relative;
        img {
          position: absolute;
          &.vuestic-login {
            z-index: 11;
            height: 245px;
            bottom: -75px;
          }
          &.vuestic-main {
            z-index: 10;
            top: -70px;
            height: 365px;
            right: -40px;
          }
        }
      }
    }
  }
  .sub-line {
    background-color: $text-color-main;
    color: $text-color-black;
    height: $footer-secondary-height;
    .container {
      height: 100%;
      @include flexbox;
      @include align-items(center);
      a.main-link {
        color: $link-pale;
        border-bottom: 1px solid $link-pale;
        &:hover {
          color: $brand-main-color;
          border-bottom: 1px solid $brand-main-color;
        }
      }
    }
  }
}
</style>
