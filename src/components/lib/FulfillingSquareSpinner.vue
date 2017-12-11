<template>
  <div class="fulfilling-square-spinner" :style="spinnerStyle">
    <div class="spinner-inner" :style="spinnerInnerStyle"></div>
  </div>
</template>

<script>
  export default {
    name: 'FulfillingSquareSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 4000
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

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`,
          borderColor: this.color
        }
      },

      spinnerInnerStyle () {
        return {
          backgroundColor: this.color
        }
      }
    }
  }
</script>

<style scoped>
  .fulfilling-square-spinner, .fulfilling-square-spinner * {
    box-sizing: border-box;
  }

  .fulfilling-square-spinner {
    height: 50px;
    width: 50px;
    position: relative;
    border: 4px solid #ff1d5e;
    animation: fulfilling-square-spinner-animation 4s infinite ease;
  }

  .fulfilling-square-spinner .spinner-inner {
    vertical-align: top;
    display: inline-block;
    background-color: #ff1d5e;
    width: 100%;
    opacity: 1;
    animation: fulfilling-square-spinner-inner-animation 4s infinite ease-in;
  }

  @keyframes fulfilling-square-spinner-animation {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(180deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fulfilling-square-spinner-inner-animation {
    0% {
      height: 0%;
    }

    25% {
      height: 0%;
    }

    50% {
      height: 100%;
    }

    75% {
      height: 100%;
    }

    100% {
      height: 0%;
    }
  }
</style>
