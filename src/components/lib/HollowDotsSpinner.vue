<template>
  <div class="hollow-dots-spinner">
    <div class="dot" v-for="(ds, index) in dotsStyles" :style="ds" :key="index"></div>
  </div>
</template>

<script>
  export default {
    name: 'HollowDotsSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1000
      },
      dotSize: {
        type: Number,
        default: 15
      },
      dotsNum: {
        type: Number,
        default: 3
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    computed: {
      dotStyle () {
        return {
          animationDuration: `${this.animationDuration}ms`,
          width: `${this.dotSize}px`,
          height: `${this.dotSize}px`,
          borderSize: `${this.dotSize / 5}px`,
          borderColor: this.color
        }
      },

      dotsStyles () {
        const dotsStyles = []
        const delayModifier = 0.3
        const basicDelay = 1000

        for (let i = 1; i <= this.dotsNum; i++) {
          const style = Object.assign({
            animationDelay: `${basicDelay * i * delayModifier}ms`
          }, this.dotStyle)

          dotsStyles.push(style)
        }

        return dotsStyles
      }
    }
  }
</script>

<style  lang="scss" scoped>
  $dot-size: 15px;
  $animation-duration: 1000ms;

  .dot {
    width: $dot-size;
    height: $dot-size;
    border: ($dot-size / 5) solid #fff;
    border-radius: 50%;
    float: left;
    margin: 0 ($dot-size / 2);
    transform: scale(0);
    animation: hollow-dots-spinner-animation $animation-duration ease infinite 0ms;
  }

  @keyframes hollow-dots-spinner-animation {
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
