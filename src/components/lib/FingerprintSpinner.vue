<template>
  <div class="fingerprint-spinner" :style="spinnerStyle">
    <div class="spinner-ring" v-for="(rs, index) in ringsStyles" :style="rs" :key="index"></div>
  </div>
</template>

<script>
  export default {
    name: 'FingerprintSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1500
      },
      size: {
        type: Number,
        default: 60
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        ringsNum: 9,
        containerPadding: 2
      }
    },

    computed: {
      outerRingSize () {
        return this.size - this.containerPadding * 2
      },

      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`,
          padding: `${this.containerPadding}px`
        }
      },

      ringStyle () {
        return {
          borderTopColor: this.color,
          animationDuration: `${this.animationDuration}ms`
        }
      },

      ringsStyles () {
        const ringsStyles = []
        const ringBase = this.outerRingSize / (this.ringsNum)
        const ringInc = ringBase

        for (let i = 1; i <= this.ringsNum; i++) {
          let style = Object.assign({
            animationDelay: `${i * 50}ms`,
            height: `${ringBase + (i - 1) * ringInc}px`,
            width: `${ringBase + (i - 1) * ringInc}px`
          }, this.ringStyle)
          ringsStyles.push(style)
        }

        return ringsStyles
      }
    }
  }
</script>

<style scoped>
  .fingerprint-spinner, .fingerprint-spinner * {
    box-sizing: border-box;
  }

  .fingerprint-spinner {
    height: 64px;
    width: 64px;
    padding: 2px;
    overflow: hidden;
    position: relative;
  }

  .fingerprint-spinner .spinner-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #ff1d5e;
    animation: fingerprint-spinner-animation 1500ms cubic-bezier(0.680, -0.750, 0.265, 1.750) infinite forwards;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  .fingerprint-spinner .spinner-ring:nth-child(1) {
    height: calc(60px / 9 + 0 * 60px / 9);
    width: calc(60px / 9 + 0 * 60px / 9);
    animation-delay: calc(50ms * 1);
  }

  .fingerprint-spinner .spinner-ring:nth-child(2) {
    height: calc(60px / 9 + 1 * 60px / 9);
    width: calc(60px / 9 + 1 * 60px / 9);
    animation-delay: calc(50ms * 2);
  }

  .fingerprint-spinner .spinner-ring:nth-child(3) {
    height: calc(60px / 9 + 2 * 60px / 9);
    width: calc(60px / 9 + 2 * 60px / 9);
    animation-delay: calc(50ms * 3);
  }

  .fingerprint-spinner .spinner-ring:nth-child(4) {
    height: calc(60px / 9 + 3 * 60px / 9);
    width: calc(60px / 9 + 3 * 60px / 9);
    animation-delay: calc(50ms * 4);
  }

  .fingerprint-spinner .spinner-ring:nth-child(5) {
    height: calc(60px / 9 + 4 * 60px / 9);
    width: calc(60px / 9 + 4 * 60px / 9);
    animation-delay: calc(50ms * 5);
  }

  .fingerprint-spinner .spinner-ring:nth-child(6) {
    height: calc(60px / 9 + 5 * 60px / 9);
    width: calc(60px / 9 + 5 * 60px / 9);
    animation-delay: calc(50ms * 6);
  }

  .fingerprint-spinner .spinner-ring:nth-child(7) {
    height: calc(60px / 9 + 6 * 60px / 9);
    width: calc(60px / 9 + 6 * 60px / 9);
    animation-delay: calc(50ms * 7);
  }

  .fingerprint-spinner .spinner-ring:nth-child(8) {
    height: calc(60px / 9 + 7 * 60px / 9);
    width: calc(60px / 9 + 7 * 60px / 9);
    animation-delay: calc(50ms * 8);
  }

  .fingerprint-spinner .spinner-ring:nth-child(9) {
    height: calc(60px / 9 + 8 * 60px / 9);
    width: calc(60px / 9 + 8 * 60px / 9);
    animation-delay: calc(50ms * 9);
  }

  @keyframes fingerprint-spinner-animation {
    100% {
      transform: rotate( 360deg );
    }
  }
</style>
