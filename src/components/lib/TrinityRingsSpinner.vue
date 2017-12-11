<template>
  <div class="trinity-rings-spinner" :style="spinnerStyle">
    <div class="circle circle1" :style="ring1Style"></div>
    <div class="circle circle2" :style="ring2Style"></div>
    <div class="circle circle3" :style="ring3Style"></div>
  </div>
</template>

<script>
  export default {
    name: 'TrinityRingsSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1500
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

    data () {
      return {
        containerPadding: 3
      }
    },

    computed: {
      outerRingSize () {
        return this.size - this.containerPadding * 2
      },

      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`,
          padding: `${this.containerPadding}px`
        }
      },

      ring1Style () {
        return {
          height: `${this.outerRingSize}px`,
          width: `${this.outerRingSize}px`,
          borderColor: this.color,
          animationDuration: `${this.animationDuration}ms`
        }
      },

      ring2Style () {
        return {
          height: `${this.outerRingSize * 0.65}px`,
          width: `${this.outerRingSize * 0.65}px`,
          borderColor: this.color,
          animationDuration: `${this.animationDuration}ms`
        }
      },

      ring3Style () {
        return {
          height: `${this.outerRingSize * 0.1}px`,
          width: `${this.outerRingSize * 0.1}px`,
          borderColor: this.color,
          animationDuration: `${this.animationDuration}ms`
        }
      }
    }
  }
</script>

<style scoped>
  .trinity-rings-spinner, .trinity-rings-spinner * {
    box-sizing: border-box;
  }

  .trinity-rings-spinner {
    height: 66px;
    width: 66px;
    padding: 3px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow: hidden;
    box-sizing: border-box;
  }
  .trinity-rings-spinner .circle {
    position:absolute;
    display:block;
    border-radius:50%;
    border: 3px solid #ff1d5e;
    opacity: 1;
  }

  .trinity-rings-spinner .circle:nth-child(1) {
    height: 60px;
    width: 60px;
    animation : trinity-rings-spinner-circle1-animation 1.5s infinite linear;
    border-width: 3px;
  }
  .trinity-rings-spinner .circle:nth-child(2) {
    height: calc(60px * 0.65);
    width: calc(60px * 0.65);
    animation : trinity-rings-spinner-circle2-animation 1.5s infinite linear;
    border-width: 2px;
  }
  .trinity-rings-spinner .circle:nth-child(3) {
    height: calc(60px * 0.1);
    width: calc(60px * 0.1);
    animation:trinity-rings-spinner-circle3-animation 1.5s infinite linear;
    border-width: 1px;
  }

  @keyframes trinity-rings-spinner-circle1-animation{
    0% {
      transform: rotateZ(20deg) rotateY(0deg);
    }
    100% {
      transform: rotateZ(100deg) rotateY(360deg);
    }
  }
  @keyframes trinity-rings-spinner-circle2-animation{
    0% {
      transform: rotateZ(100deg) rotateX(0deg);
    }
    100% {
      transform: rotateZ(0deg) rotateX(360deg);
    }
  }
  @keyframes trinity-rings-spinner-circle3-animation{
    0% {
      transform: rotateZ(100deg) rotateX(-360deg);
    }
    100% {
      transform: rotateZ(-360deg) rotateX(360deg);
    }
  }
</style>
