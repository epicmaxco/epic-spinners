<template>
  <div class="samples">
    <ul>
      <li>
        <flower-spinner
          :animation-duration="2500"
          :dot-size="10"
          :color="spinnerColor"
        />
      </li>
      <li>
        <pixel-spinner
          :animation-duration="2000"
          :pixel-size="10"
          :color="spinnerColor"
        />
      </li>
      <li>
        <hollow-dots-spinner
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          :color="spinnerColor"
        />
      </li>
      <li>
        <intersecting-circles-spinner
          :animation-duration="1200"
          :circle-size="35"
          :color="spinnerColor"
        />
      </li>
      <li>
        <orbit-spinner
          :animation-duration="1200"
          :size="55"
          :color="spinnerColor"
        />
      </li>
      <li>
        <radar-spinner
          :animation-duration="2000"
          :size="60"
          :color="spinnerColor"
        />
      </li>
      <li>
        <scaling-squares-spinner
          :animation-duration="1250"
          :size="50"
          :color="spinnerColor"
        />
      </li>
      <li>
        <half-circle-spinner
          :animation-duration="1000"
          :size="60"
          :color="spinnerColor"
        />
      </li>
      <li>
        <trinity-rings-spinner
          :animation-duration="1500"
          :size="66"
          :color="spinnerColor"
        />
      </li>
      <li>
        <fulfilling-square-spinner
          :animation-duration="4000"
          :size="50"
          :color="spinnerColor"
        />
      </li>
      <li>
        <circles-to-rhombuses-spinner
          :animation-duration="1200"
          :circles-num="3"
          :circle-size="15"
          :color="spinnerColor"
        />
      </li>
      <li>
        <semipolar-spinner
          :animation-duration="2000"
          :size="65"
          :color="spinnerColor"
        />
      </li>
      <li>
        <self-building-square-spinner
          :animation-duration="6000"
          :square-size="10"
          :color="spinnerColor"
        />
      </li>
      <li>
        <swapping-squares-spinner
          :animation-duration="1000"
          :size="50"
          :color="spinnerColor"
        />
      </li>

      <li>
        <fulfilling-bouncing-circle-spinner
          :animation-duration="4000"
          :size="60"
          :color="spinnerColor"
        />
      </li>
      <li>
        <fingerprint-spinner
          :animation-duration="1500"
          :size="64"
          :color="spinnerColor"
        />
      </li>
      <li>
        <spring-spinner
          :animation-duration="3000"
          :size="60"
          :color="spinnerColor"
        />
      </li>
      <li>
        <atom-spinner
          :animation-duration="1000"
          :size="60"
          :color="spinnerColor"
        />
      </li>
      <li>
        <looping-rhombuses-spinner
          :animation-duration="2500"
          :rhombus-size="15"
          :color="spinnerColor"
        />
      </li>
      <li>
        <breeding-rhombus-spinner
          :animation-duration="2000"
          :size="65"
          :color="spinnerColor"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  import HollowDotsSpinner from './lib/HollowDotsSpinner.vue'
  import PixelSpinner from './lib/PixelSpinner.vue'
  import FlowerSpinner from './lib/FlowerSpinner.vue'
  import IntersectingCirclesSpinner from './lib/IntersectingCirclesSpinner.vue'
  import OrbitSpinner from './lib/OrbitSpinner.vue'
  import FingerprintSpinner from './lib/FingerprintSpinner.vue'
  import TrinityRingsSpinner from './lib/TrinityRingsSpinner.vue'
  import FulfillingSquareSpinner from './lib/FulfillingSquareSpinner.vue'
  import CirclesToRhombusesSpinner from './lib/CirclesToRhombusesSpinner.vue'
  import SemipolarSpinner from './lib/SemipolarSpinner.vue'
  import DiamondSpinner from './lib/DiamondSpinner.vue'
  import BreedingRhombusSpinner from './lib/BreedingRhombusSpinner.vue'
  import SwappingSquaresSpinner from './lib/SwappingSquaresSpinner.vue'
  import ScalingSquaresSpinner from './lib/ScalingSquaresSpinner.vue'
  import FulfillingBouncingCircleSpinner from './lib/FulfillingBouncingCircleSpinner.vue'
  import RadarSpinner from './lib/RadarSpinner.vue'
  import SelfBuildingSquareSpinner from './lib/SelfBuildingSquareSpinner.vue'
  import SpringSpinner from './lib/SpringSpinner.vue'
  import LoopingRhombusesSpinner from './lib/LoopingRhombusesSpinner.vue'
  import HalfCircleSpinner from './lib/HalfCircleSpinner.vue'
  import AtomSpinner from './lib/AtomSpinner.vue'

  export default {
    name: 'Samples',

    components: {
      HollowDotsSpinner,
      PixelSpinner,
      FlowerSpinner,
      IntersectingCirclesSpinner,
      OrbitSpinner,
      FingerprintSpinner,
      TrinityRingsSpinner,
      FulfillingSquareSpinner,
      CirclesToRhombusesSpinner,
      SemipolarSpinner,
      DiamondSpinner,
      BreedingRhombusSpinner,
      SwappingSquaresSpinner,
      ScalingSquaresSpinner,
      FulfillingBouncingCircleSpinner,
      RadarSpinner,
      SelfBuildingSquareSpinner,
      SpringSpinner,
      LoopingRhombusesSpinner,
      HalfCircleSpinner,
      AtomSpinner
    },

    data () {
      return {
        spinnerColor: '#ff1d5e'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  padding: 50px;
  height: 150px;
  width: 150px;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
