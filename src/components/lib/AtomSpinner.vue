<template>
  <div class="atom-spinner">
    <div class="spinner-inner" :style="spinnerStyle">
      <div class="spinner-line" :style="lineStyle"></div>
      <div class="spinner-line" :style="lineStyle"></div>
      <div class="spinner-line" :style="lineStyle"></div>
      <!--Chrome renders little circles malformed :(-->
      <div class="spinner-circle" :style="circleStyle">
        &#9679;
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'AtomSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1000
      },
      size: {
        type: Number,
        default: 60
      },
      color: {
        type: String,
        default: 'red'
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },

      circleStyle () {
        return {
          color: this.color,
          fontSize: `${this.size * 0.24}px`
        }
      },

      lineStyle () {
        return {
          animationDuration: `${this.animationDuration}ms`,
          borderLeftWidth: `${this.size / 25}px`,
          borderTopWidth: `${this.size / 25}px`,
          borderLeftColor: this.color
        }
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .atom-spinner {
    overflow: hidden;

    .spinner-inner {
      position: relative;
      display: block;
    }

    .spinner-circle {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .spinner-line {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border-left-style: solid;
      border-top-style: solid;
      border-top-color: transparent;

      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          animation: atom-spinner-animation-#{$i} 1s linear infinite;
          transform: rotateZ(360deg / 3 * $i) rotateX(66deg) rotateZ(0deg);
        }
      }
    }
  }

  @for $i from 1 through 3 {
    @keyframes atom-spinner-animation-#{$i} {
      100% {
        transform: rotateZ(360deg / 3 * $i) rotateX(66deg) rotateZ(360deg);
      }
    }
  }


</style>
