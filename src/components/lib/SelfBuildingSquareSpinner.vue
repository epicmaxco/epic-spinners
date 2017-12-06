<template>
  <div class="self-building-square-spinner" :style="spinnerStyle">
    <div class="square"
         v-for="(ss, index) in squaresStyles"
         :key="index"
         :style="ss"
         :class="{'clear': index && index % 3 === 0}"
         >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelfBuildingSquareSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 6000
      },
      squareSize: {
        type: Number,
        default: 10
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        squaresNum: 9
      }
    },

    computed: {
      initialTopPosition () {
        return -this.squareSize * 2 / 3
      },

      spinnerStyle () {
        return {
          top: `${-this.initialTopPosition}px`
        }
      },

      squareStyle () {
        return {
          height: `${this.squareSize}px`,
          width: `${this.squareSize}px`,
          top: `${this.initialTopPosition}px`,
          marginRight: `${this.squareSize / 3}px`,
          marginTop: `${this.squareSize / 3}px`,
          animationDuration: `${this.animationDuration}ms`,
          background: this.color
        }
      },

      squaresStyles () {
        const squaresStyles = []
        const delaysMultipliers = [6, 7, 8, 3, 4, 5, 0, 1, 2]
        const delayModifier = this.animationDuration * 0.05

        for (let i = 0; i < this.squaresNum; i++) {
          squaresStyles.push(Object.assign({
            animationDelay: `${delayModifier * delaysMultipliers[i]}ms`
          }, this.squareStyle))
        }

        return squaresStyles
      }
    }
  }
</script>

<style  lang="scss" scoped>
  @keyframes self-building-square-spinner {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      top: 0;
    }
    50.9% {
      opacity: 1;
      top: 0;
    }
    55.9% {
      opacity: 0;
      top: inherit;
    }
  }

  .square{
    background: white;
    float: left;
    position:relative;
    opacity: 0;
    animation: self-building-square-spinner 6s infinite;
  }

  .clear{
    clear: both;
  }
</style>
