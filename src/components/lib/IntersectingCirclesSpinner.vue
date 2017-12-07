<template>
  <div class="intersecting-circles-spinner">
    <div class="spinnerBlock" :style="spinnerStyle">
      <span v-for="(cs, index) in circleStyles" :style="cs" :key="index"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IntersectingCirclesSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1200
      },
      circleSize: {
        type: Number,
        default: 50
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    computed: {
      spinnerStyle () {
        return {
          animationDuration: `${this.animationDuration}ms`,
          width: `${this.circleSize}px`,
          height: `${this.circleSize}px`
        }
      },

      circleStyle () {
        return {
          borderColor: this.color
        }
      },

      circleStyles () {
        const circlesPositions = [
          {top: 0, left: 0},
          {left: `${this.circleSize * -0.36}px`, top: `${this.circleSize * 0.2}px`},
          {left: `${this.circleSize * -0.36}px`, top: `${this.circleSize * -0.2}px`},
          {left: 0, top: `${this.circleSize * -0.36}px`},
          {left: `${this.circleSize * 0.36}px`, top: `${this.circleSize * -0.2}px`},
          {left: `${this.circleSize * 0.36}px`, top: `${this.circleSize * 0.2}px`},
          {left: 0, top: `${this.circleSize * 0.36}px`}
        ]

        return circlesPositions.map((cp) => Object.assign(cp, this.circleStyle))
      }
    }
  }
</script>

<style  lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .intersecting-circles-spinner {
    position: relative;
    .spinnerBlock {
      animation: intersecting-circles-spinners-animation 1200ms linear infinite;
      transform-origin: center;
      display: block;
      height: 50px;
      width: 50px;
    }
    span {
      display: block;
      border: 2px solid #fff;
      border-radius: 50%;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  @keyframes intersecting-circles-spinners-animation {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>
