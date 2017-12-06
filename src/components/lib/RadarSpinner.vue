<template>
  <div class="radar-spinner" :style="spinnerStyle">
    <div class="circle" v-for="(cs, index) in circlesStyles" :key="index" :style="cs">
      <div class="circle-inner-container" :style="circleInnerContainerStyle">
        <div class="circle-inner" :style="circleInnerStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RadarSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 2000
      },
      size: {
        type: Number,
        default: 110
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        circlesNum: 4
      }
    },

    computed: {
      borderWidth () {
        return this.size * 5 / 110
      },

      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },

      circleStyle () {
        return {
          animationDuration: `${this.animationDuration}ms`
        }
      },

      circleInnerContainerStyle () {
        return {
          borderWidth: `${this.borderWidth}px`
        }
      },

      circleInnerStyle () {
        return {
          borderLeftColor: this.color,
          borderRightColor: this.color,
          borderWidth: `${this.borderWidth}px`
        }
      },

      circlesStyles () {
        const circlesStyles = []
        const delay = this.animationDuration * 0.15

        for (let i = 0; i < this.circlesNum; i++) {
          circlesStyles.push(Object.assign({
            padding: `${this.borderWidth * 2 * i}px`,
            animationDelay: `${i === this.circlesNum - 1 ? 0 : delay}ms`
          }, this.circleStyle))
        }

        return circlesStyles
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .radar-spinner {
    position: relative;
  }

  .circle {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    animation: radar-spinner-animation 2s infinite;

    &.three {
      left: 10px;
      top: 10px;
      width: 90px;
      height: 90px;
      animation-delay: 0.3s;
    }

    .circle-inner, .circle-inner-container {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      border: 5px solid transparent;
    }
  }

  @keyframes radar-spinner-animation {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
