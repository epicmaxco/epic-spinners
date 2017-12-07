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

<style  lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .fingerprint-spinner {
    overflow: hidden;
    position: relative;
  }

  .spinner-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
    animation: polar-spinner-animation 1500ms cubic-bezier(0.680, -0.750, 0.265, 1.750) infinite forwards;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  @keyframes polar-spinner-animation {
    100% { transform: rotate( 360deg ); }
  }
</style>
