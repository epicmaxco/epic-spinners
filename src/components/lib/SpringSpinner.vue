<template>
  <div class="spring-spinner" :style="spinnerStyle">
    <div class="spring-spinner-part top" :style="spinnerPartStyle">
      <div class="spring-spinner-rotator" :style="rotatorStyle"></div>
    </div>
    <div class="spring-spinner-part bottom" :style="spinnerPartStyle">
      <div class="spring-spinner-rotator" :style="rotatorStyle"></div>
    </div>
  </div>
</template>

<script>
  import utils from '../../services/utils'

  export default {
    name: 'SpringSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 3000
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
        animationName: `spring-spinner-animation-${Date.now()}`
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },

      spinnerPartStyle () {
        return {
          height: `${this.size / 2}px`,
          width: `${this.size}px`
        }
      },

      rotatorStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`,
          borderRightColor: this.color,
          borderTopColor: this.color,
          borderWidth: `${this.size / 7}px`,
          animationDuration: `${this.animationDuration}ms`,
          animationName: this.animationName
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

    mounted () {
      this.updateAnimation()
    },

    beforeDestroy () {
      utils.removeKeyframes(this.animationName)
    },

    methods: {
      updateAnimation () {
        utils.removeKeyframes(this.animationName)
        utils.appendKeyframes(this.animationName, this.generateKeyframes())
      },

      generateKeyframes () {
        return `
          0% {
            border-width: ${this.size / 7}px;
          }
          25% {
            border-width: ${this.size / 23.33}px;
          }
          50% {
            transform: rotate(115deg);
            border-width: ${this.size / 7}px;
          }
          75% {
            border-width: ${this.size / 23.33}px;
           }
          100% {
           border-width: ${this.size / 7}px;
          }`
      }
    }
  }
</script>

<style scoped>
  .spring-spinner, .spring-spinner * {
    box-sizing: border-box;
  }

  .spring-spinner {
    height: 60px;
    width: 60px;
  }

  .spring-spinner .spring-spinner-part {
    overflow: hidden;
    height: calc(60px / 2);
    width: 60px;
  }

  .spring-spinner  .spring-spinner-part.bottom {
    transform: rotate(180deg) scale(-1, 1);
  }

  .spring-spinner .spring-spinner-rotator {
    width: 60px;
    height: 60px;
    border: calc(60px / 7) solid transparent;
    border-right-color: #ff1d5e;
    border-top-color: #ff1d5e;
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation 3s ease-in-out infinite;
    transform: rotate(-200deg);
  }

  /* NOTE Keyframes here serve as reference. They don't do anything. */
  @keyframes spring-spinner-animation {
    0% {
      border-width: calc(60px / 7);
    }
    25% {
      border-width: calc(60px / 23.33);
    }
    50% {
      transform: rotate(115deg);
      border-width: calc(60px / 7);
    }
    75% {
      border-width: calc(60px / 23.33);
    }
    100% {
      border-width: calc(60px / 7);
    }
  }
</style>
