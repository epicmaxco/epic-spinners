<template>
  <div class="flower-spinner" :style="spinnerStyle">
    <div class="dots-container" :style="dotsContainerStyle">
      <div class="bigger-dot" :style="biggerDotStyle">
        <div class="smaller-dot" :style="smallerDotStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '../../services/utils'

  export default {
    name: 'FlowerSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 2500
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
        smallerDotAnimationBaseName: 'flower-spinner-smaller-dot-animation',
        biggerDotAnimationBaseName: 'flower-spinner-bigger-dot-animation',
        currentSmallerDotAnimationBaseName: '',
        currentBiggerDotAnimationBaseName: ''
      }
    },

    computed: {
      dotSize () {
        return this.size / 7
      },

      spinnerStyle () {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`
        }
      },

      dotsContainerStyle () {
        return {
          width: `${this.dotSize}px`,
          height: `${this.dotSize}px`
        }
      },

      smallerDotStyle () {
        return {
          background: this.color,
          animationDuration: `${this.animationDuration}ms`,
          animationName: this.currentSmallerDotAnimationBaseName
        }
      },

      biggerDotStyle () {
        return {
          background: this.color,
          animationDuration: `${this.animationDuration}ms`,
          animationName: this.currentBiggerDotAnimationBaseName
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
        utils.appendKeyframes(this.currentSmallerDotAnimationBaseName, this.generateSmallerDotKeyframes())
        utils.appendKeyframes(this.currentBiggerDotAnimationBaseName, this.generateBiggerDotKeyframes())
      },

      updateAnimationName () {
        this.currentSmallerDotAnimationBaseName = `${this.smallerDotAnimationBaseName}-${Date.now()}`
        this.currentBiggerDotAnimationBaseName = `${this.biggerDotAnimationBaseName}-${Date.now()}`
      },

      generateSmallerDotKeyframes () {
        return `0%, 100% {
                    box-shadow: 0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color};
                  }
                  25%, 75% {
                    box-shadow: ${this.dotSize * 1.4}px 0 0 ${this.color},
                                -${this.dotSize * 1.4}px 0 0 ${this.color},
                                0 ${this.dotSize * 1.4}px 0 ${this.color},
                                0 -${this.dotSize * 1.4}px 0 ${this.color},
                                ${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                                ${this.dotSize}px ${this.dotSize}px 0 ${this.color},
                                -${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                                -${this.dotSize}px ${this.dotSize}px 0 ${this.color};

                  }
                  100% {
                    box-shadow: 0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color};
                  }`
      },

      generateBiggerDotKeyframes () {
        return `0%, 100% {
                    box-shadow: 0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color};
                  }
                  50% {
                    transform: rotate(180deg);
                  }
                  25%, 75% {
                    box-shadow: ${this.dotSize * 2.6}px 0 0 ${this.color},
                                -${this.dotSize * 2.6}px 0 0 ${this.color},
                                0 ${this.dotSize * 2.6}px 0 ${this.color},
                                0 -${this.dotSize * 2.6}px 0 ${this.color},
                                ${this.dotSize * 1.9}px -${this.dotSize * 1.9}px 0 ${this.color},
                                ${this.dotSize * 1.9}px ${this.dotSize * 1.9}px 0 ${this.color},
                                -${this.dotSize * 1.9}px -${this.dotSize * 1.9}px 0 ${this.color},
                                -${this.dotSize * 1.9}px ${this.dotSize * 1.9}px 0 ${this.color};

                  }
                  100% {
                    transform: rotate(360deg);
                    box-shadow: 0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color};
                  }`
      }
    }
  }
</script>

<style scoped>
  .flower-spinner,  .flower-spinner * {
    box-sizing: border-box;
  }

  .flower-spinner {
    height: 70px;
    width: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .flower-spinner .dots-container {
    height: calc(70px / 7);
    width: calc(70px / 7);
  }

  .flower-spinner .smaller-dot {
    background: #ff1d5e;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    animation: flower-spinner-smaller-dot-animation 2.5s 0s infinite both;

  }

  .flower-spinner .bigger-dot {
    background: #ff1d5e;
    height: 100%;
    width: 100%;
    padding: 10%;
    border-radius: 50%;
    animation: flower-spinner-bigger-dot-animation 2.5s 0s infinite both;
  }

  @keyframes flower-spinner-bigger-dot-animation {
    0%, 100% {
      box-shadow: rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px;
    }

    50% {
      transform: rotate(180deg);
    }

    25%, 75% {
      box-shadow: rgb(255, 29, 94) 26px 0px 0px,
      rgb(255, 29, 94) -26px 0px 0px,
      rgb(255, 29, 94) 0px 26px 0px,
      rgb(255, 29, 94) 0px -26px 0px,
      rgb(255, 29, 94) 19px -19px 0px,
      rgb(255, 29, 94) 19px 19px 0px,
      rgb(255, 29, 94) -19px -19px 0px,
      rgb(255, 29, 94) -19px 19px 0px;
    }

    100% {
      transform: rotate(360deg);
      box-shadow: rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px;
    }
  }

  @keyframes flower-spinner-smaller-dot-animation {
    0%, 100% {
      box-shadow: rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px;
    }

    25%, 75% {
      box-shadow: rgb(255, 29, 94) 14px 0px 0px,
      rgb(255, 29, 94) -14px 0px 0px,
      rgb(255, 29, 94) 0px 14px 0px,
      rgb(255, 29, 94) 0px -14px 0px,
      rgb(255, 29, 94) 10px -10px 0px,
      rgb(255, 29, 94) 10px 10px 0px,
      rgb(255, 29, 94) -10px -10px 0px,
      rgb(255, 29, 94) -10px 10px 0px;
    }

    100% {
      box-shadow: rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px;
    }
  }
</style>
