<template>
  <div class="diamond-spinner" :style="spinnerStyle">
    <div class="diamond-spinner-row">
      <div class="arrow up outer outer-18" :style="outerArrowsStyles[18]"></div>
      <div class="arrow down outer outer-17" :style="outerArrowsStyles[17]"></div>
      <div class="arrow up outer outer-16" :style="outerArrowsStyles[16]"></div>
      <div class="arrow down outer outer-15" :style="outerArrowsStyles[15]"></div>
      <div class="arrow up outer outer-14" :style="outerArrowsStyles[14]"></div>
    </div>

    <div class="diamond-spinner-row">
      <div class="arrow up outer outer-1" :style="outerArrowsStyles[1]"></div>
      <div class="arrow down outer outer-2" :style="outerArrowsStyles[2]"></div>
      <div class="arrow up inner inner-6" :style="innerArrowsStyles[6]"></div>
      <div class="arrow down inner inner-5" :style="innerArrowsStyles[5]"></div>
      <div class="arrow up inner inner-4" :style="innerArrowsStyles[4]"></div>
      <div class="arrow down outer outer-13" :style="outerArrowsStyles[13]"></div>
      <div class="arrow up outer outer-12" :style="outerArrowsStyles[12]"></div>
    </div>

    <div class="diamond-spinner-row">
      <div class="arrow down outer outer-3" :style="outerArrowsStyles[3]"></div>
      <div class="arrow up outer outer-4" :style="outerArrowsStyles[4]"></div>
      <div class="arrow down inner inner-1" :style="innerArrowsStyles[1]"></div>
      <div class="arrow up inner inner-2" :style="innerArrowsStyles[2]"></div>
      <div class="arrow down inner inner-3" :style="innerArrowsStyles[3]"></div>
      <div class="arrow up outer outer-11" :style="outerArrowsStyles[11]"></div>
      <div class="arrow down outer outer-10" :style="outerArrowsStyles[10]"></div>
    </div>

    <div class="diamond-spinner-row">
      <div class="arrow down outer outer-5" :style="outerArrowsStyles[5]"></div>
      <div class="arrow up outer outer-6" :style="outerArrowsStyles[6]"></div>
      <div class="arrow down outer outer-7" :style="outerArrowsStyles[7]"></div>
      <div class="arrow up outer outer-8" :style="outerArrowsStyles[8]"></div>
      <div class="arrow down outer outer-9" :style="outerArrowsStyles[9]"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DiamondSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1000
      },
      size: {
        type: Number,
        default: 65
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        outerArrowsNum: 18,
        innerArrowsNum: 6
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },
      arrowStyle () {
        const arrowSizeModifier = 7.19833333
        const borderBottomModifier = 1.7995
        const arrowSize = this.size / arrowSizeModifier

        return {
          margin: `0 ${-arrowSize / 2}px`,
          borderLeft: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize * borderBottomModifier}px solid ${this.color}`,
          animationDuration: `${this.animationDuration}ms`
        }
      },

      outerArrowsStyles () {
        const outerStyles = {}

        for (let i = 1; i <= this.outerArrowsNum; i++) {
          outerStyles[i] = Object.assign({
            animationDelay: `${-this.animationDuration / this.outerArrowsNum * i}ms`
          }, this.arrowStyle)
        }

        return outerStyles
      },

      innerArrowsStyles () {
        const innerStyles = {}

        for (let i = 1; i <= this.innerArrowsNum; i++) {
          innerStyles[i] = Object.assign({
            animationDelay: `${-this.animationDuration / this.innerArrowsNum * i}ms`
          }, this.arrowStyle)
        }

        return innerStyles
      }
    }
  }
</script>

<style  lang="scss" scoped>
  $time: 1;

  * {
    box-sizing: border-box;
  }

  .diamond-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;

    .diamond-spinner-row {
      display: flex;
    }
  }

  .arrow {
    width: 0;
    height: 0;
    animation: diamond-spinner-animation $time + s infinite;

    &.down {
      transform: rotate(180deg);
    }
  }

  @keyframes diamond-spinner-animation {
    0% { opacity: 0.1; }
    30% { opacity: 1; }
    100% { opacity: 0.1; }
  }


</style>
