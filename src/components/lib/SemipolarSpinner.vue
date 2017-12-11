<template>
  <div class="semipolar-spinner" :style="spinnerStyle">
    <div class="ring" v-for="(rs, index) in ringsStyles" :style="rs" :key="index"></div>
  </div>
</template>

<script>
  export default {
    name: 'SemipolarSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 2000
      },
      size: {
        type: Number,
        default: 65
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        ringsNum: 5
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },
      ringStyle () {
        return {
          animationDuration: `${this.animationDuration}ms`,
          borderTopColor: this.color,
          borderLeftColor: this.color
        }
      },
      ringsStyles () {
        const ringsStyles = []
        const delayModifier = 0.1
        const ringWidth = this.size * 0.05
        const positionIncrement = ringWidth * 2
        const sizeDecrement = this.size * 0.2

        for (let i = 0; i < this.ringsNum; i++) {
          const computedSize = `${this.size - sizeDecrement * i}px`
          const computedPosition = `${positionIncrement * i}px`
          const style = Object.assign({
            animationDelay: `${this.animationDuration * delayModifier * (this.ringsNum - i - 1)}ms`,
            height: computedSize,
            width: computedSize,
            left: computedPosition,
            top: computedPosition,
            borderWidth: `${ringWidth}px`
          }, this.ringStyle)
          ringsStyles.push(style)
        }

        return ringsStyles
      }
    }
  }
</script>

<style scoped>
  .semipolar-spinner, .semipolar-spinner * {
    box-sizing: border-box;
  }

  .semipolar-spinner {
    height: 65px;
    width: 65px;
    position: relative;
  }

  .semipolar-spinner .ring {
    border-radius: 50%;
    position: absolute;
    border: calc(65px * 0.05) solid transparent;
    border-top-color: #ff1d5e;
    border-left-color: #ff1d5e;
    animation: semipolar-spinner-animation 2s infinite;
  }

  .semipolar-spinner .ring:nth-child(1) {
    height: calc(65px - 65px * 0.2 * 0);
    width: calc(65px - 65px * 0.2 * 0);
    top: calc(65px * 0.1 * 0);
    left: calc(65px * 0.1 * 0);
    animation-delay: calc(2000ms * 0.1 * 4);
    z-index: 5;
  }

  .semipolar-spinner .ring:nth-child(2) {
    height: calc(65px - 65px * 0.2 * 1);
    width: calc(65px - 65px * 0.2 * 1);
    top: calc(65px * 0.1 * 1);
    left: calc(65px * 0.1 * 1);
    animation-delay: calc(2000ms * 0.1 * 3);
    z-index: 4;
  }

  .semipolar-spinner .ring:nth-child(3) {
    height: calc(65px - 65px * 0.2 * 2);
    width: calc(65px - 65px * 0.2 * 2);
    top: calc(65px * 0.1 * 2);
    left: calc(65px * 0.1 * 2);
    animation-delay: calc(2000ms * 0.1 * 2);
    z-index: 3;
  }

  .semipolar-spinner .ring:nth-child(4) {
    height: calc(65px - 65px * 0.2 * 3);
    width: calc(65px - 65px * 0.2 * 3);
    top: calc(65px * 0.1 * 3);
    left: calc(65px * 0.1 * 3);
    animation-delay: calc(2000ms * 0.1 * 1);
    z-index: 2;
  }

  .semipolar-spinner .ring:nth-child(5) {
    height: calc(65px - 65px * 0.2 * 4);
    width: calc(65px - 65px * 0.2 * 4);
    top: calc(65px * 0.1 * 4);
    left: calc(65px * 0.1 * 4);
    animation-delay: calc(2000ms * 0.1 * 0);
    z-index: 1;
  }

  @keyframes semipolar-spinner-animation {
    50% {
      transform: rotate(360deg) scale(0.7);
    }
  }
</style>
