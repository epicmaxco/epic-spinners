<template>
  <div class="loaders-get-started">
    <div class="section-title section">1. Installation</div>

    <div class="code section">npm install --save epic-spinners</div>

    <div class="section-title section">2. Usage</div>

        <div class="highlight highlight-text-html-vue code section"><pre>&lt;<span class="pl-ent">template</span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span
            class="pl-pds">"</span>app<span class="pl-pds">"</span></span>&gt;
     &lt;<span class="pl-ent">atom-spinner</span>
          :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span
            class="pl-c1">1000</span><span class="pl-pds">"</span></span>
          :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">60</span><span
            class="pl-pds">"</span></span>
          :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span
            class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
     /&gt;
  &lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">template</span>&gt;

<span class="pl-s1">&lt;<span class="pl-ent">script</span>&gt;</span>
<span class="pl-s1">  <span class="pl-c"><span class="pl-c">//</span> To use minified css and js files instead of .vue single file components:</span></span>
<span class="pl-s1">  <span class="pl-c"><span class="pl-c">//</span> import 'epic-spinners/dist/lib/epic-spinners.min.css'</span></span>
<span class="pl-s1">  <span class="pl-c"><span class="pl-c">//</span> import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'</span></span>
<span class="pl-s1">  </span>
<span class="pl-s1">  <span class="pl-k">import</span> {<span class="pl-smi">AtomSpinner</span>} <span
  class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>epic-spinners<span
  class="pl-pds">'</span></span></span>
<span class="pl-s1">  <span class="pl-k">export</span> <span class="pl-c1">default</span> {</span>
<span class="pl-s1">    components<span class="pl-k">:</span> {</span>
<span class="pl-s1">      AtomSpinner</span>
<span class="pl-s1">    }</span>
<span class="pl-s1">  }</span>
<span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></pre>
        </div>

    <div class="section-title section">3. Components list</div>
    <div class="section-subtitle section">You can easily configure spinner's size, color and animation speed.</div>

  <div class="highlight highlight-text-html-vue code section"><pre>&lt;<span class="pl-ent">flower-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">2500</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">70</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">pixel-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">2000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">pixel-size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">70</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">hollow-dots-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">dot-size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">15</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">dots-num</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">3</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">intersecting-circles-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1200</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">70</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">orbit-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1200</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">55</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">radar-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">2000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">60</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">scaling-squares-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1250</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">65</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">half-circle-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">60</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">trinity-rings-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1500</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">66</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">fulfilling-square-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">4000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">50</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">circles-to-rhombuses-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1200</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">circles-num</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">3</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">circle-size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">15</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">semipolar-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">2000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">65</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">self-building-square-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">6000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">40</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">swapping-squares-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">65</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">fulfilling-bouncing-circle-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">4000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">60</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">fingerprint-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1500</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">64</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">spring-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">3000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">60</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">atom-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">1000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">60</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">looping-rhombuses-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">2500</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">rhombus-size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">15</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;

&lt;<span class="pl-ent">breeding-rhombus-spinner</span>
  :<span class="pl-e">animation-duration</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">2000</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">size</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">65</span><span class="pl-pds">"</span></span>
  :<span class="pl-e">color</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-s"><span class="pl-pds">'</span>#ff1d5e<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
/&gt;</pre></div>

  </div>
</template>

<script lang="ts">
  export default {
    name: 'LoadersGetStarted'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../sass/variables";
  
  .loaders-get-started {
    margin-top: 85px;
    .section-title {
      font-size: 24px;
    }
    .section-subtitle {
      font-size: 16px;
    }
    .section {
      margin: 0 auto 25px auto;
      width: 70%
    }
    pre {
      color: #fff
    }
    .pl-ent {
      color: #ff1d5e;
    }
    .pl-e {
      color: #8734ff;
    }
    .pl-c1 {
      color: #4ae387;
    }
    .pl-c {
      color: #a5a5a5;
    }
    .code {
      overflow: hidden;
      padding: 20px;
      background-color: rgba(81, 79, 92, 0.2);
    }
  }
  @media (max-width: $screen-xs-max) {
    .loaders-get-started {
      .section {
        width: 85%;
      }
    }
  }
</style>
