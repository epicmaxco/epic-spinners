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
      size: {
        type: Number,
        default: 40
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
      squareSize () {
        return this.size / 4
      },

      initialTopPosition () {
        return -this.squareSize * 2 / 3
      },

      spinnerStyle () {
        return {
          top: `${-this.initialTopPosition}px`,
          height: `${this.size}px`,
          width: `${this.size}px`
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

<style scoped>
  .self-building-square-spinner, .self-building-square-spinner * {
    box-sizing: border-box;
  }

  .self-building-square-spinner {
    height: 40px;
    width: 40px;
    top: calc( -10px * 2 / 3);
  }

  .self-building-square-spinner .square {
    height: 10px;
    width: 10px;
    top: calc( -10px * 2 / 3);
    margin-right: calc(10px / 3);
    margin-top: calc(10px / 3);
    background: #ff1d5e;
    float: left;
    position:relative;
    opacity: 0;
    animation: self-building-square-spinner 6s infinite;
  }

  .self-building-square-spinner .square:nth-child(1) {
    animation-delay: calc(300ms * 6);
  }

  .self-building-square-spinner .square:nth-child(2) {
    animation-delay: calc(300ms * 7);
  }

  .self-building-square-spinner .square:nth-child(3) {
    animation-delay: calc(300ms * 8);
  }

  .self-building-square-spinner .square:nth-child(4) {
    animation-delay: calc(300ms * 3);
  }

  .self-building-square-spinner .square:nth-child(5) {
    animation-delay: calc(300ms * 4);
  }

  .self-building-square-spinner .square:nth-child(6) {
    animation-delay: calc(300ms * 5);
  }

  .self-building-square-spinner .square:nth-child(7) {
    animation-delay: calc(300ms * 0);
  }

  .self-building-square-spinner .square:nth-child(8) {
    animation-delay: calc(300ms * 1);
  }

  .self-building-square-spinner .square:nth-child(9) {
    animation-delay: calc(300ms * 2);
  }

  .self-building-square-spinner .clear{
    clear: both;
  }

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
</style>
