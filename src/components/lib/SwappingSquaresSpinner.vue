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
        default: 50
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        animationBaseName: 'breeding-rhombus-spinner-animation-child',
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
          height: `${this.size * 0.25}px`,
          width: `${this.size * 0.25}px`,
          animationDuration: `${this.animationDuration}ms`,
          top: `${this.size * 0.37}px`,
          left: `${this.size * 0.37}px`,
          borderWidth: `${this.size * 0.04}px`,
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

<style  lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .swapping-squares-spinner {
    position: relative;
  }

  .square {
    margin-right: auto;
    margin-left: auto;
    border-style: solid;
    position: absolute;
    animation-iteration-count: infinite;

    @for $i from 1 through 4 {
      &.square-#{$i} {
        animation-name: swapping-squares-animation-child-#{$i};
      }
    }
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
