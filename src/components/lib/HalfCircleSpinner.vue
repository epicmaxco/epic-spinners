<template>
  <div class="half-circle-spinner" :style="spinnerStyle">
    <div class="circle circle-1" :style="circle1Style"></div>
    <div class="circle circle-2" :style="circle2Style"></div>
  </div>
</template>

<script>
  export default {
    name: 'HalfCircleSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1000
      },
      size: {
        type: Number,
        default: 60
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },

      circleStyle () {
        return {
          borderWidth: `${this.size / 10}px`,
          animationDuration: `${this.animationDuration}ms`
        }
      },

      circle1Style () {
        return Object.assign({
          borderTopColor: this.color
        }, this.circleStyle)
      },

      circle2Style () {
        return Object.assign({
          borderBottomColor: this.color
        }, this.circleStyle)
      }
    }
  }
</script>

<style scoped>
  .half-circle-spinner, .half-circle-spinner * {
    box-sizing: border-box;
  }

  .half-circle-spinner {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: relative;
  }

  .half-circle-spinner .circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(60px / 10) solid transparent;
  }

  .half-circle-spinner .circle.circle-1 {
    border-top-color: #ff1d5e;
    animation: half-circle-spinner-animation 1s infinite;
  }

  .half-circle-spinner .circle.circle-2 {
    border-bottom-color: #ff1d5e;
    animation: half-circle-spinner-animation 1s infinite alternate;
  }

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
