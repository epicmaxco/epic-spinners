<template>
  <div class="circles-to-rhombuses-spinner" :style="spinnertStyle">
    <div class="circle" v-for="(cs, index) in circlesStyles" :style="cs" :key="index"></div>
  </div>
</template>

<script>
  export default {
    name: 'CirclesToRhombusesSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1200
      },
      circleSize: {
        type: Number,
        default: 15
      },
      color: {
        type: String,
        default: '#fff'
      },
      circlesNum: {
        type: Number,
        default: 3
      }
    },

    computed: {
      circleMarginLeft () {
        return this.circleSize * 1.125
      },

      spinnertStyle () {
        return {
          height: `${this.circleSize}px`,
          width: `${(this.circleSize + this.circleMarginLeft) * this.circlesNum}px`
        }
      },

      circleStyle () {
        return {
          borderColor: this.color,
          animationDuration: `${this.animationDuration}ms`,
          height: `${this.circleSize}px`,
          width: `${this.circleSize}px`,
          marginLeft: `${this.circleMarginLeft}px`
        }
      },

      circlesStyles () {
        const circlesStyles = []
        const delay = 150

        for (let i = 1; i <= this.circlesNum; i++) {
          const style = Object.assign({
            animationDelay: `${i * delay}ms`
          }, this.circleStyle)

          if (i === 1) {
            style.marginLeft = 0
          }

          circlesStyles.push(style)
        }

        return circlesStyles
      }
    }
  }
</script>

<style scoped>
  .circles-to-rhombuses-spinner, .circles-to-rhombuses-spinner * {
    box-sizing: border-box;
  }

  .circles-to-rhombuses-spinner {
    height: 15px;
    width: calc( (15px + 15px * 1.125) * 3);
    display: flex;
    align-items: center;
    justify-content: center
  }

  .circles-to-rhombuses-spinner .circle {
    height: 15px;
    width: 15px;
    margin-left: calc(15px * 1.125);
    transform: rotate(45deg);
    border-radius: 10%;
    border: 3px solid #ff1d5e;
    overflow: hidden;
    background: transparent;

    animation: circles-to-rhombuses-animation 1200ms linear infinite;
  }

  .circles-to-rhombuses-spinner .circle:nth-child(1) {
    animation-delay: calc(150ms * 1);
    margin-left: 0
  }

  .circles-to-rhombuses-spinner .circle:nth-child(2) {
    animation-delay: calc(150ms * 2);
  }

  .circles-to-rhombuses-spinner .circle:nth-child(3) {
    animation-delay: calc(150ms * 3);
  }

  @keyframes circles-to-rhombuses-animation {
    0% {
      border-radius: 10%;
    }

    17.5% {
      border-radius: 10%;
    }

    50% {
      border-radius: 100%;
    }


    93.5% {
      border-radius: 10%;
    }

    100% {
      border-radius: 10%;
    }
  }

  @keyframes circles-to-rhombuses-background-animation {
    50% {
      opacity: 0.4;
    }
  }

</style>
