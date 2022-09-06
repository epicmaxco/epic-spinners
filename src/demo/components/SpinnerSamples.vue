<template>
  <div class="samples">
    <label> Show <input v-model="show" type="checkbox" /> </label>
    <label> Duration <input v-model.number="animationDuration" /> </label>
    <label> Size <input v-model.number="size" /> </label>
    <label> Color <input v-model="spinnerColor" type="color" /> </label>

    <ul v-if="show" class="samples__list">
      <li>
        <flower-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <pixel-spinner :animation-duration="animationDuration" :size="size" :color="spinnerColor" />
      </li>
      <li>
        <hollow-dots-spinner
          :animation-duration="animationDuration"
          :dot-size="size / 4"
          :dots-num="3"
          :color="spinnerColor"
        />
      </li>
      <li>
        <intersecting-circles-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <orbit-spinner :animation-duration="animationDuration" :size="size" :color="spinnerColor" />
      </li>
      <li>
        <radar-spinner :animation-duration="animationDuration" :size="size" :color="spinnerColor" />
      </li>
      <li>
        <scaling-squares-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <half-circle-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <trinity-rings-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <fulfilling-square-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <circles-to-rhombuses-spinner
          :animation-duration="animationDuration"
          :circles-num="3"
          :circle-size="size / 4"
          :color="spinnerColor"
        />
      </li>
      <li>
        <semipolar-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <self-building-square-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <swapping-squares-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <fulfilling-bouncing-circle-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <fingerprint-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <spring-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
      <li>
        <atom-spinner :animation-duration="animationDuration" :size="size" :color="spinnerColor" />
      </li>
      <li>
        <looping-rhombuses-spinner
          :animation-duration="animationDuration"
          :rhombus-size="size / 4"
          :color="spinnerColor"
        />
      </li>
      <li>
        <breeding-rhombus-spinner
          :animation-duration="animationDuration"
          :size="size"
          :color="spinnerColor"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import HollowDotsSpinner from '../../components/HollowDotsSpinner.vue'
import PixelSpinner from '../../components/PixelSpinner.vue'
import FlowerSpinner from '../../components/FlowerSpinner.vue'
import IntersectingCirclesSpinner from '../../components/IntersectingCirclesSpinner.vue'
import OrbitSpinner from '../../components/OrbitSpinner.vue'
import FingerprintSpinner from '../../components/FingerprintSpinner.vue'
import TrinityRingsSpinner from '../../components/TrinityRingsSpinner.vue'
import FulfillingSquareSpinner from '../../components/FulfillingSquareSpinner.vue'
import CirclesToRhombusesSpinner from '../../components/CirclesToRhombusesSpinner.vue'
import SemipolarSpinner from '../../components/SemipolarSpinner.vue'
import BreedingRhombusSpinner from '../../components/BreedingRhombusSpinner.vue'
import SwappingSquaresSpinner from '../../components/SwappingSquaresSpinner.vue'
import ScalingSquaresSpinner from '../../components/ScalingSquaresSpinner.vue'
import FulfillingBouncingCircleSpinner from '../../components/FulfillingBouncingCircleSpinner.vue'
import RadarSpinner from '../../components/RadarSpinner.vue'
import SelfBuildingSquareSpinner from '../../components/SelfBuildingSquareSpinner.vue'
import SpringSpinner from '../../components/SpringSpinner.vue'
import LoopingRhombusesSpinner from '../../components/LoopingRhombusesSpinner.vue'
import HalfCircleSpinner from '../../components/HalfCircleSpinner.vue'
import AtomSpinner from '../../components/AtomSpinner.vue'

export default {
  name: 'SpinnerSamples',

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
    BreedingRhombusSpinner,
    SwappingSquaresSpinner,
    ScalingSquaresSpinner,
    FulfillingBouncingCircleSpinner,
    RadarSpinner,
    SelfBuildingSquareSpinner,
    SpringSpinner,
    LoopingRhombusesSpinner,
    HalfCircleSpinner,
    AtomSpinner,
  },

  data() {
    return {
      show: true,
      animationDuration: 2000,
      size: 60,
      spinnerColor: '#ff1d5e',
    }
  },
}
</script>

<style lang="scss" scoped>
.samples {
  display: flex;
  justify-content: center;
  flex-direction: column;

  * + * {
    margin-top: 0.5rem;
  }

  &__list {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    list-style-type: none;

    li {
      display: flex;
      padding: 1.5rem;
      min-height: 5rem;
      min-width: 5rem;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
