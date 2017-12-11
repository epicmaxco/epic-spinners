<template>
  <div class="scaling-squares-spinner" :style="spinnerStyle">
      <div class="square"
           v-for="(ss, index) in squaresStyles"
           :key="index"
           :class="`square-${index + 1}`"
           :style="ss">
      </div>
  </div>
</template>

<script>
  export default {
    name: 'ScalingSquaresSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1250
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
        squaresNum: 4
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`,
          animationDuration: `${this.animationDuration}ms`
        }
      },

      squareStyle () {
        return {
          height: `${this.size * 0.25 / 1.3}px`,
          width: `${this.size * 0.25 / 1.3}px`,
          animationDuration: `${this.animationDuration}ms`,
          borderWidth: `${this.size * 0.04 / 1.3}px`,
          borderColor: this.color
        }
      },

      squaresStyles () {
        const squaresStyles = []

        for (let i = 1; i <= this.squaresNum; i++) {
          squaresStyles.push(Object.assign({
          }, this.squareStyle))
        }

        return squaresStyles
      }
    }
  }
</script>

<style scoped>
  .scaling-squares-spinner, .scaling-squares-spinner * {
    box-sizing: border-box;
  }

  .scaling-squares-spinner {
    height: 65px;
    width: 65px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation: scaling-squares-animation 1250ms;
    animation-iteration-count: infinite;
    transform: rotate(0deg);
  }

  .scaling-squares-spinner .square {
    height: calc(65px * 0.25 / 1.3);
    width: calc(65px * 0.25 / 1.3);
    margin-right: auto;
    margin-left: auto;
    border: calc(65px * 0.04 / 1.3) solid #ff1d5e;
    position: absolute;
    animation-duration: 1250ms;
    animation-iteration-count: infinite;
  }

  .scaling-squares-spinner .square:nth-child(1) {
    animation-name: scaling-squares-spinner-animation-child-1;
  }

  .scaling-squares-spinner .square:nth-child(2) {
    animation-name: scaling-squares-spinner-animation-child-2;
  }

  .scaling-squares-spinner .square:nth-child(3) {
    animation-name: scaling-squares-spinner-animation-child-3;
  }

  .scaling-squares-spinner .square:nth-child(4) {
    animation-name: scaling-squares-spinner-animation-child-4;
  }


  @keyframes scaling-squares-animation {

    50% {
      transform: rotate(90deg);
    }

    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes scaling-squares-spinner-animation-child-1 {
    50% {
      transform: translate(150%,150%) scale(2,2);
    }
  }

  @keyframes scaling-squares-spinner-animation-child-2 {
    50% {
      transform: translate(-150%,150%) scale(2,2);
    }
  }

  @keyframes scaling-squares-spinner-animation-child-3 {
    50% {
      transform: translate(-150%,-150%) scale(2,2);
    }
  }

  @keyframes scaling-squares-spinner-animation-child-4 {
    50% {
      transform: translate(150%,-150%) scale(2,2);
    }
  }
</style>
