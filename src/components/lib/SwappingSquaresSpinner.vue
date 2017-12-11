<template>
  <div class="swapping-squares-spinner" :style="spinnerStyle">
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
    name: 'SwappingSquaresSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1000
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
        animationBaseName: 'swapping-squares-animation-child',
        squaresNum: 4
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
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
        const delay = this.animationDuration * 0.5

        for (let i = 1; i <= this.squaresNum; i++) {
          squaresStyles.push(Object.assign({
            animationDelay: `${i % 2 === 0 ? delay : 0}ms`
          }, this.squareStyle))
        }

        return squaresStyles
      }
    }
  }
</script>

<style scoped>
  .swapping-squares-spinner, .swapping-squares-spinner * {
    box-sizing: border-box;
  }

  .swapping-squares-spinner {
    height: 65px;
    width: 65px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .swapping-squares-spinner .square {
    height: calc(65px * 0.25 / 1.3);
    width:  calc(65px * 0.25 / 1.3);
    animation-duration: 1000ms;
    border: calc(65px * 0.04 / 1.3) solid #ff1d5e;
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    animation-iteration-count: infinite;
  }

  .swapping-squares-spinner .square:nth-child(1) {
    animation-name: swapping-squares-animation-child-1;
    animation-delay: 500ms;
  }

  .swapping-squares-spinner .square:nth-child(2) {
    animation-name: swapping-squares-animation-child-2;
    animation-delay: 0ms;
  }

  .swapping-squares-spinner .square:nth-child(3) {
    animation-name: swapping-squares-animation-child-3;
    animation-delay: 500ms;
  }

  .swapping-squares-spinner .square:nth-child(4) {
    animation-name: swapping-squares-animation-child-4;
    animation-delay: 0ms;
  }

  @keyframes swapping-squares-animation-child-1 {
    50% {
      transform: translate(150%,150%) scale(2,2);
    }
  }

  @keyframes swapping-squares-animation-child-2 {
    50% {
      transform: translate(-150%,150%) scale(2,2);
    }
  }

  @keyframes swapping-squares-animation-child-3 {
    50% {
      transform: translate(-150%,-150%) scale(2,2);
    }
  }

  @keyframes swapping-squares-animation-child-4 {
    50% {
      transform: translate(150%,-150%) scale(2,2);
    }
  }
</style>
