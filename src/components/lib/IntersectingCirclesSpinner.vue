<template>
  <div class="intersecting-circles-spinner" :style="spinnerStyle">
    <div class="spinnerBlock" :style="spinnerBlockStyle">
      <span class="circle" v-for="(cs, index) in circleStyles" :style="cs" :key="index"></span>
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
      size: {
        type: Number,
        default: 70
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    computed: {
      circleSize () {
        return this.size / 2
      },

      spinnerStyle () {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`
        }
      },

      spinnerBlockStyle () {
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

<style scoped>
  .intersecting-circles-spinner, .intersecting-circles-spinner * {
    box-sizing: border-box;
  }

  .intersecting-circles-spinner {
    height: 70px;
    width: 70px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .intersecting-circles-spinner .spinnerBlock {
    animation: intersecting-circles-spinners-animation 1200ms linear infinite;
    transform-origin: center;
    display: block;
    height: 35px;
    width: 35px;
  }

  .intersecting-circles-spinner .circle {
    display: block;
    border: 2px solid #ff1d5e;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .intersecting-circles-spinner .circle:nth-child(1) {
    left: 0;
    top: 0;
  }

  .intersecting-circles-spinner .circle:nth-child(2) {
    left: calc(35px * -0.36);
    top: calc(35px * 0.2);
  }

  .intersecting-circles-spinner .circle:nth-child(3) {
    left: calc(35px * -0.36);
    top: calc(35px * -0.2);
  }

  .intersecting-circles-spinner .circle:nth-child(4) {
    left: 0;
    top: calc(35px * -0.36);
  }

  .intersecting-circles-spinner .circle:nth-child(5) {
    left: calc(35px * 0.36);
    top: calc(35px * -0.2);
  }

  .intersecting-circles-spinner .circle:nth-child(6) {
    left: calc(35px * 0.36);
    top: calc(35px * 0.2);
  }

  .intersecting-circles-spinner .circle:nth-child(7) {
    left: 0;
    top: calc(35px * 0.36);
  }

  @keyframes intersecting-circles-spinners-animation {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>
