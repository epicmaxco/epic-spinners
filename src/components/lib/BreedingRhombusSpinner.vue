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

<style scoped>
  .breeding-rhombus-spinner {
    height: 65px;
    width: 65px;
    position: relative;
    transform: rotate(45deg);
  }

  .breeding-rhombus-spinner, .breeding-rhombus-spinner * {
    box-sizing: border-box;
  }

  .breeding-rhombus-spinner .rhombus {
    height: calc(65px / 7.5);
    width: calc(65px / 7.5);
    animation-duration: 2000ms;
    top: calc(65px / 2.3077);
    left: calc(65px / 2.3077);
    background-color: #ff1d5e;
    position: absolute;
    animation-iteration-count: infinite;
  }

  .breeding-rhombus-spinner .rhombus:nth-child(2n+0) {
    margin-right: 0;
  }

  .breeding-rhombus-spinner .rhombus.child-1 {
    animation-name: breeding-rhombus-spinner-animation-child-1;
    animation-delay: calc(100ms * 1);
  }

  .breeding-rhombus-spinner .rhombus.child-2 {
    animation-name: breeding-rhombus-spinner-animation-child-2;
    animation-delay: calc(100ms * 2);
  }

  .breeding-rhombus-spinner .rhombus.child-3 {
    animation-name: breeding-rhombus-spinner-animation-child-3;
    animation-delay: calc(100ms * 3);
  }

  .breeding-rhombus-spinner .rhombus.child-4 {
    animation-name: breeding-rhombus-spinner-animation-child-4;
    animation-delay: calc(100ms * 4);
  }

  .breeding-rhombus-spinner .rhombus.child-5 {
    animation-name: breeding-rhombus-spinner-animation-child-5;
    animation-delay: calc(100ms * 5);
  }

  .breeding-rhombus-spinner .rhombus.child-6 {
    animation-name: breeding-rhombus-spinner-animation-child-6;
    animation-delay: calc(100ms * 6);
  }

  .breeding-rhombus-spinner .rhombus.child-7 {
    animation-name: breeding-rhombus-spinner-animation-child-7;
    animation-delay: calc(100ms * 7);
  }

  .breeding-rhombus-spinner .rhombus.child-8 {
    animation-name: breeding-rhombus-spinner-animation-child-8;
    animation-delay: calc(100ms * 8);
  }

  .breeding-rhombus-spinner .rhombus.big {
    height: calc(65px / 3);
    width: calc(65px / 3);
    animation-duration: 2000ms;
    top: calc(65px / 3);
    left: calc(65px / 3);
    background-color: #ff1d5e;
    animation: breeding-rhombus-spinner-animation-child-big 2s infinite;
    animation-delay: 0.5s;
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
