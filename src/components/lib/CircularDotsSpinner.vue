<template>
  <div class="circular-dots-spinner">
    <div
      :key="index"
      :style="dotStyle"
      class="dot"
      v-for="index in 5"
    >
      <div
        :style="innerDotStyle"
        class="inner-dot"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircularDotsSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 500
    },
    dotSize: {
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
        height: `${this.dotSize}px`,
        width: `${this.dotSize}px`
      }
    },

    dotStyle () {
      return {
        animationDuration: `${this.animationDuration}ms`,
        width: `${this.dotSize}px`,
        height: `${this.dotSize}px`
      }
    },

    innerDotStyle () {
      return {
        background: this.color
      }
    }
  }
}
</script>

<style scoped>
.circular-dots-spinner {
  position: relative;
  display: inline-block;
}

.circular-dots-spinner .dot {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: rotate(225deg);
  animation: orbit 7.15s infinite;
}

.circular-dots-spinner .dot .inner-dot {
  position: absolute;
  width: 20%;
  height: 20%;
  left: 0;
  top: 0;
  border-radius: 50%;
}

.circular-dots-spinner .dot:nth-child(1) {
  animation-delay: 0.35s;
}

.circular-dots-spinner .dot:nth-child(2) {
  animation-delay: 0.7s;
}

.circular-dots-spinner .dot:nth-child(3) {
  animation-delay: 1.05s;
}

.circular-dots-spinner .dot:nth-child(4) {
  animation-delay: 1.4s;
}

.circular-dots-spinner .dot:nth-child(5) {
  animation-delay: 1.75s;
}

@keyframes orbit {
  0% {
    opacity: 1;
    transform: rotate(180deg);
    animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
    origin: 0%;
  }

  30% {
    opacity: 1;
    transform: rotate(410deg);
    animation-timing-function: ease-in-out;
    origin: 7%;
  }

  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
    origin: 30%;
  }

  70% {
    opacity: 1;
    transform: rotate(770deg);
    animation-timing-function: ease-out;
    origin: 39%;
  }

  75% {
    opacity: 1;
    transform: rotate(900deg);
    animation-timing-function: ease-out;
    origin: 70%;
  }

  76% {
    opacity: 0;
    transform: rotate(900deg);
  }

  100% {
    opacity: 0;
    transform: rotate(900deg);
  }
}
</style>
