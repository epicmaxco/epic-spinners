<template>
  <div class="flower-spinner" :style="spinnerStyle">
    <div class="dots-container" :style="dotsContainerStyle">
      <div class="big-dot" :style="biggerDotStyle">
        <div class="small-dot" :style="smallerDotStyle"></div>
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
        smallDotName: `flower-spinner-small-dot-${Date.now()}`,
        bigDotName: `flower-spinner-big-dot-${Date.now()}`
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
          animationName: this.smallDotName
        }
      },

      biggerDotStyle () {
        return {
          background: this.color,
          animationDuration: `${this.animationDuration}ms`,
          animationName: this.bigDotName
        }
      }
    },

    watch: {
      size: {
        handler: 'updateAnimation',
        immediate: true
      },
      color: {
        handler: 'updateAnimation',
        immediate: true
      }
    },

    beforeDestroy () {
      utils.removeKeyframes(this.smallDotName)
      utils.removeKeyframes(this.bigDotName)
    },

    methods: {
      updateAnimation () {
        utils.removeKeyframes(this.smallDotName)
        utils.appendKeyframes(this.smallDotName, this.generateSmallDotKeyframes())
        utils.removeKeyframes(this.bigDotName)
        utils.appendKeyframes(this.bigDotName, this.generateBigDotKeyframes())
      },

      generateSmallDotKeyframes () {
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

      generateBigDotKeyframes () {
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

  .flower-spinner .small-dot {
    background: #ff1d5e;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    animation: flower-spinner-small-dot-animation 2.5s 0s infinite both;
  }

  .flower-spinner .big-dot {
    background: #ff1d5e;
    height: 100%;
    width: 100%;
    padding: 10%;
    border-radius: 50%;
    animation: flower-spinner-big-dot-animation 2.5s 0s infinite both;
  }

  /* NOTE Keyframes here serve as reference. They don't do anything. */
  @keyframes flower-spinner-big-dot-animation {
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

  @keyframes flower-spinner-small-dot-animation {
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
