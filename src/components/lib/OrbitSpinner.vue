<template>
  <div class="orbit-spinner" :style="spinnerStyle">
    <div class="orbit one" :style="orbitStyle"></div>
    <div class="orbit two" :style="orbitStyle"></div>
    <div class="orbit three" :style="orbitStyle"></div>
  </div>
</template>

<script>
  export default {
    name: 'OrbitSpinner',

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

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },

      orbitStyle () {
        return {
          borderColor: this.color,
          animationDuration: `${this.animationDuration}ms`
        }
      }
    }
  }
</script>

<style  lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .orbit-spinner {
    border-radius: 50%;
    perspective: 800px;
  }

  .orbit {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .orbit.one {
    left: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-one-animation 1s linear infinite;
    border-bottom: 3px solid #fff;
  }

  .orbit.two {
    right: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-two-animation 1s linear infinite;
    border-right: 3px solid #fff;
  }

  .orbit.three {
    right: 0%;
    bottom: 0%;
    animation: orbit-spinner-orbit-three-animation 1s linear infinite;
    border-top: 3px solid #fff;
  }

  @keyframes orbit-spinner-orbit-one-animation {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

  @keyframes orbit-spinner-orbit-two-animation {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes orbit-spinner-orbit-three-animation {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
</style>
