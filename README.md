# epic-spinners

Easy to use css spinners collection with vue.js integration

<p align="center"> 
  <a href="http://epic-spinners.epicmax.co" target="_blank">
    <img src="https://i.imgur.com/RYxUVsM.png" align="center" width="888px"/>
  </a> 
</p>

## What's it all about?

We've collected and crafted a rich collection of spinners animated with css which are available both as html/css code snippets and easily customizable vue.js components.

Special thanks to [@martinvd](https://github.com/martinvd) for his outstanding codepens :)

## Demo & Documentation
Visit our [gallery](http://epic-spinners.epicmax.co) to see vue.js components usage examples and html/css source code

## Installation
```
npm install --save epic-spinners
```

## Usage
Vue.js usage example 

``` vue
<template>
  <div id="app">
     <atom-spinner
          :animation-duration="1000"
          :size="60"
          :color="'#ff1d5e'"
     />
  </div>
</template>

<script>
  // To use minified css and js files instead of .vue single file components:
  // import 'epic-spinners/dist/lib/epic-spinners.min.css'
  // import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'
  
  import {AtomSpinner} from 'epic-spinners'
  export default {
    components: {
      AtomSpinner
    }
  }
</script>
```
To use pure html/css version, visit our [gallery](http://epic-spinners.epicmax.co) and click any spinner to see its html/css source code

## Vue.js components list
You can easily configure spinners' size, color and animation speed

``` vue
<flower-spinner
  :animation-duration="2500"
  :size="70"
  :color="'#ff1d5e'"
/>

<pixel-spinner
  :animation-duration="2000"
  :pixel-size="70"
  :color="'#ff1d5e'"
/>

<hollow-dots-spinner
  :animation-duration="1000"
  :dot-size="15"
  :dots-num="3"
  :color="'#ff1d5e'"
/>

<intersecting-circles-spinner
  :animation-duration="1200"
  :size="70"
  :color="'#ff1d5e'"
/>

<orbit-spinner
  :animation-duration="1200"
  :size="55"
  :color="'#ff1d5e'"
/>

<radar-spinner
  :animation-duration="2000"
  :size="60"
  :color="'#ff1d5e'"
/>

<scaling-squares-spinner
  :animation-duration="1250"
  :size="65"
  :color="'#ff1d5e'"
/>

<half-circle-spinner
  :animation-duration="1000"
  :size="60"
  :color="'#ff1d5e'"
/>

<trinity-rings-spinner
  :animation-duration="1500"
  :size="66"
  :color="'#ff1d5e'"
/>

<fulfilling-square-spinner
  :animation-duration="4000"
  :size="50"
  :color="'#ff1d5e'"
/>

<circles-to-rhombuses-spinner
  :animation-duration="1200"
  :circles-num="3"
  :circle-size="15"
  :color="'#ff1d5e'"
/>
    
<semipolar-spinner
  :animation-duration="2000"
  :size="65"
  :color="'#ff1d5e'"
/>
    
<self-building-square-spinner
  :animation-duration="6000"
  :size="40"
  :color="'#ff1d5e'"
/>
    
<swapping-squares-spinner
  :animation-duration="1000"
  :size="65"
  :color="'#ff1d5e'"
/>

<fulfilling-bouncing-circle-spinner
  :animation-duration="4000"
  :size="60"
  :color="'#ff1d5e'"
/>

<fingerprint-spinner
  :animation-duration="1500"
  :size="64"
  :color="'#ff1d5e'"
/>

<spring-spinner
  :animation-duration="3000"
  :size="60"
  :color="'#ff1d5e'"
/>

<atom-spinner
  :animation-duration="1000"
  :size="60"
  :color="'#ff1d5e'"
/>

<looping-rhombuses-spinner
  :animation-duration="2500"
  :rhombus-size="15"
  :color="'#ff1d5e'"
/>

<breeding-rhombus-spinner
  :animation-duration="2000"
  :size="65"
  :color="'#ff1d5e'"
/>
```
## Epic spinners for other frameworks
- [angular-epic-spinners](https://github.com/hackafro/angular-epic-spinners) by @HackAfro
- [react-epic-spinners](https://github.com/bondz/react-epic-spinners) by @bondz

## How can I support developers?
- Star our GitHub repo :star:
- Create pull requests, submit bugs, suggest new features or documentation updates :wrench:
- Follow us on [Twitter](https://twitter.com/epicmaxco) :feet:
- Like our page on [Facebook](https://www.facebook.com/epicmaxco) :thumbsup:

## Can I hire you guys?
Yes!  Visit [our homepage](http://epicmax.co/) or simply send us a message to [hello@epicmax.co](mailto:hello@epicmax.co). We will be happy to work with you!

## License
[MIT](https://github.com/epicmaxco/vuestic-admin/blob/master/LICENSE) license.



