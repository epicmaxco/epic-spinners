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
  import utils from 'services/utils'

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
        animationBaseName: 'spring-spinner-animation',
        currentAnimationName: ''
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
          animationName: this.currentAnimationName
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

<style  lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .spring-spinner-part {
    overflow: hidden;

    &.bottom {
      transform: rotate(180deg) scale(-1, 1);
    }
  }

  .spring-spinner-rotator {
    width: 70px;
    height: 70px;
    border-style: solid;
    border-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation 3s ease-in-out infinite;
    transform: rotate(-200deg);
  }
</style>
