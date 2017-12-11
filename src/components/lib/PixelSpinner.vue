<template>
  <div class="pixel-spinner" :style="spinnerStyle">
    <div class="pixel-spinner-inner" :style="spinnerInnerStyle"></div>
  </div>
</template>

<script>
  import utils from '../../services/utils'

  export default {
    name: 'PixelSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1500
      },
      size: {
        type: Number,
        default: 70
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        animationBaseName: 'pixel-spinner-animation',
        currentAnimationName: ''
      }
    },

    computed: {
      pixelSize () {
        return this.size / 7
      },

      spinnerStyle () {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`
        }
      },

      spinnerInnerStyle () {
        return {
          animationDuration: `${this.animationDuration}ms`,
          animationName: this.currentAnimationName,
          width: `${this.pixelSize}px`,
          height: `${this.pixelSize}px`,
          backgroundColor: this.color,
          color: this.color,
          boxShadow: `
                        ${this.pixelSize * 1.5}px ${this.pixelSize * 1.5}px 0 0,
                        ${this.pixelSize * -1.5}px ${this.pixelSize * -1.5}px 0 0,
                        ${this.pixelSize * 1.5}px ${this.pixelSize * -1.5}px 0 0,
                        ${this.pixelSize * -1.5}px ${this.pixelSize * 1.5}px 0 0,
                        0 ${this.pixelSize * 1.5}px 0 0,
                        ${this.pixelSize * 1.5}px 0 0 0,
                        ${this.pixelSize * -1.5}px 0 0 0,
                        0 ${this.pixelSize * -1.5}px 0 0
                      `
        }
      }
    },

    watch: {
      '$props': {
        handler () {
          this.updateAnimation()
        },
        deep: true
      }
    },

    mounted () {
      this.updateAnimation()
    },

    methods: {
      updateAnimation () {
        this.updateAnimationName()
        utils.appendKeyframes(this.currentAnimationName, this.generateKeyframes())
      },

      updateAnimationName () {
        this.currentAnimationName = `${this.animationBaseName}-${Date.now()}`
      },

      generateKeyframes () {
        return `
        50% {
          box-shadow:  ${this.pixelSize * 2}px ${this.pixelSize * 2}px 0 0,
                       ${this.pixelSize * -2}px ${this.pixelSize * -2}px 0 0,
                       ${this.pixelSize * 2}px ${this.pixelSize * -2}px 0 0,
                       ${this.pixelSize * -2}px ${this.pixelSize * 2}px 0 0,
                       0 ${this.pixelSize}px 0 0,
                       ${this.pixelSize}px 0 0 0,
                       ${this.pixelSize * -1}px 0 0 0,
                       0 ${this.pixelSize * -1}px 0 0;
        }


        75% {
          box-shadow:  ${this.pixelSize * 2}px ${this.pixelSize * 2}px 0 0,
                       ${this.pixelSize * -2}px ${this.pixelSize * -2}px 0 0,
                       ${this.pixelSize * 2}px ${this.pixelSize * -2}px 0 0,
                       ${this.pixelSize * -2}px ${this.pixelSize * 2}px 0 0,
                       0 ${this.pixelSize}px 0 0,
                       ${this.pixelSize}px 0 0 0,
                       ${this.pixelSize * -1}px 0 0 0,
                       0 ${this.pixelSize * -1}px 0 0;
        }

        100% {
          transform: rotate(360deg);
        }`
      }
    }
  }
</script>

<style scoped>
  .pixel-spinner, .pixel-spinner * {
    box-sizing: border-box;
  }

  .pixel-spinner {
    height: 70px;
    width: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .pixel-spinner .pixel-spinner-inner {
    width: calc(70px / 7);
    height: calc(70px / 7);
    background-color: #ff1d5e;
    color: #ff1d5e;
    box-shadow: 15px 15px  0 0,
    -15px -15px  0 0,
    15px -15px  0 0,
    -15px 15px  0 0,
    0 15px  0 0,
    15px 0  0 0,
    -15px 0  0 0,
    0 -15px 0 0;
    animation: pixel-spinner-animation 2000ms linear infinite;
  }

  @keyframes pixel-spinner-animation {
    50% {
      box-shadow: 20px 20px 0px 0px,
      -20px -20px 0px 0px,
      20px -20px 0px 0px,
      -20px 20px 0px 0px,
      0px 10px 0px 0px,
      10px 0px 0px 0px,
      -10px 0px 0px 0px,
      0px -10px 0px 0px;
    }
    75% {
      box-shadow: 20px 20px 0px 0px,
      -20px -20px 0px 0px,
      20px -20px 0px 0px,
      -20px 20px 0px 0px,
      0px 10px 0px 0px,
      10px 0px 0px 0px,
      -10px 0px 0px 0px,
      0px -10px 0px 0px;
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
