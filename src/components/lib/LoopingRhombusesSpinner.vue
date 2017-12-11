<template>
  <div class="looping-rhombuses-spinner" :style="spinnerStyle">
    <div class="rhombus"
         v-for="(rs, index) in rhombusesStyles"
         :ikey="index"
         :style="rs">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoopingRhombusesSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 2500
      },
      rhombusSize: {
        type: Number,
        default: 15
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        rhombusesNum: 3
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.rhombusSize}px`,
          width: `${this.rhombusSize * 4}px`
        }
      },

      rhombusStyle () {
        return {
          height: `${this.rhombusSize}px`,
          width: `${this.rhombusSize}px`,
          backgroundColor: this.color,
          animationDuration: `${this.animationDuration}ms`,
          left: `${this.rhombusSize * 4}px`
        }
      },

      rhombusesStyles () {
        const rhombusesStyles = []
        const delay = -this.animationDuration / 1.5

        for (let i = 1; i <= this.rhombusesNum; i++) {
          const style = Object.assign({
            animationDelay: `${i * delay}ms`
          }, this.rhombusStyle)

          rhombusesStyles.push(style)
        }

        return rhombusesStyles
      }
    }
  }
</script>

<style scoped>
  .looping-rhombuses-spinner, .looping-rhombuses-spinner * {
    box-sizing: border-box;
  }

  .looping-rhombuses-spinner {
    width: calc(15px * 4);
    height: 15px;
    position: relative;
  }

  .looping-rhombuses-spinner .rhombus {
    height: 15px;
    width: 15px;
    background-color: #ff1d5e;
    left: calc(15px * 4);
    position: absolute;
    margin: 0 auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation: looping-rhombuses-spinner-animation 2500ms linear infinite;
  }

  .looping-rhombuses-spinner .rhombus:nth-child(1) {
    animation-delay: calc(2500ms * 1 / -1.5);
  }

  .looping-rhombuses-spinner .rhombus:nth-child(2) {
    animation-delay: calc(2500ms * 2 / -1.5);
  }

  .looping-rhombuses-spinner .rhombus:nth-child(3) {
    animation-delay: calc(2500ms * 3 / -1.5);
  }

  @keyframes looping-rhombuses-spinner-animation {
    0% {
      transform: translateX(0) rotate(45deg) scale(0);
    }
    50% {
      transform: translateX(-233%) rotate(45deg) scale(1);
    }
    100% {
      transform: translateX(-466%) rotate(45deg) scale(0);
    }
  }
</style>
