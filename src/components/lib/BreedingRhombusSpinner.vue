<template>
  <div class="breeding-rhombus-spinner" :style="spinnerStyle">
    <div class="rhombus" v-for="(rs, index) in rhombusesStyles" :key="index" :style="rs" :class="`child-${index + 1}`"></div>
    <div class="rhombus big" :style="bigRhombusStyle"></div>
  </div>
</template>

<script>
  export default {
    name: 'BreedingRhombusSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 2000
      },
      size: {
        type: Number,
        default: 150
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        animationBaseName: 'breeding-rhombus-spinner-animation-child',
        rhombusesNum: 8
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },

      rhombusStyle () {
        return {
          height: `${this.size / 7.5}px`,
          width: `${this.size / 7.5}px`,
          animationDuration: `${this.animationDuration}ms`,
          top: `${this.size / 2.3077}px`,
          left: `${this.size / 2.3077}px`,
          backgroundColor: this.color
        }
      },

      rhombusesStyles () {
        const rhombusesStyles = []
        const delayModifier = this.animationDuration * 0.05

        for (let i = 1; i <= this.rhombusesNum; i++) {
          rhombusesStyles.push(Object.assign({
            animationDelay: `${delayModifier * (i + 1)}ms`
          }, this.rhombusStyle))
        }

        return rhombusesStyles
      },

      bigRhombusStyle () {
        return {
          height: `${this.size / 3}px`,
          width: `${this.size / 3}px`,
          animationDuration: `${this.animationDuration}`,
          top: `${this.size / 3}px`,
          left: `${this.size / 3}px`,
          backgroundColor: this.color
        }
      }
    }

  }
</script>

<style  lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .breeding-rhombus-spinner {
    position: relative;
    transform: rotate(45deg);
  }

  .rhombus {
    position: absolute;
    animation-iteration-count: infinite;

    &:nth-child(2n+0) {
      margin-right: 0;
    }

    @for $i from 1 through 8 {
      &.child-#{$i} {
        animation-name: breeding-rhombus-spinner-animation-child-#{$i};
      }
    }

    &.big {
      animation: breeding-rhombus-spinner-animation-child-big 2s infinite;
      animation-delay: 0.5s;
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-1 {
    50% {
      transform: translate(-325%, -325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-2 {
    50% {
      transform: translate(0, -325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-3 {
    50% {
      transform: translate(325%, -325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-4 {
    50% {
      transform: translate(325%, 0);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-5 {
    50% {
      transform: translate(325%, 325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-6 {
    50% {
      transform: translate(0, 325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-7 {
    50% {
      transform: translate(-325%, 325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-8 {
    50% {
      transform: translate(-325%, 0);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-big {
    50% {
      transform: scale(0.5);
    }
  }
</style>
