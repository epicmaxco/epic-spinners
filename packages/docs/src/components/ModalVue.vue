<template>
    <transition name="modal">
        <div class="modal-mask" @click="close" v-show="show">
            <div class="modal-container" @click.stop>
              <Tabs :html="html" :css="css" :npm="npm" :vue="vue"/>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
  import Tabs from './Tab.vue'
  export default {
    name: 'modal',
    props: { 
      show: { type: Boolean, default: false }, 
      spinnerName: { type: String, default: undefined },
    },
    data () {
      return {
        css: '',
        html: '',
        vue: '',
        npm: ''
      }
    },
    methods: {
      close: function (event: any) {
        event.stopPropagation()
        this.$emit('close')
      }
    },
    components: { Tabs },
    mounted () {
      console.log(this.spinnerName)

       const getRawVueData = async (fileName: any) => {
        const data = await fetch('/static/examples/vue/' + fileName + '.vue?raw&inline')
        const rawText = await data.text()
        const example = rawText.replace(/\\n/g, ' \n').replace(/\\"/g, '"')

        const templateStartndex = example.indexOf('<template>')
        const templateEndIndex = example.indexOf('</template>')
        this.vue = example.substring(templateStartndex, templateEndIndex + 11)
        const scriptStartIndex = example.indexOf('<script lang="ts">')
        const scriptEndIndex = example.indexOf('</script')
        this.npm = example.substring(scriptStartIndex + 18, scriptEndIndex).trim()
      }

      const getRawHtmlData = async (fileName: any) => {
        const data = await fetch('/static/examples/html/' + fileName + '.html')
        const rawText = await data.text()

        const styleStartIndex = rawText.indexOf('<style>')
        const styleEndIndex = rawText.indexOf('</style>')
        this.css = rawText.substring(styleStartIndex + 7, styleEndIndex).trim()
        const htmlStartIndex = rawText.indexOf('<body>')
        const htmlEndIndex = rawText.indexOf('</body>')
        this.html = rawText.substring(htmlStartIndex + 6, htmlEndIndex).trim()
      }

      getRawHtmlData(this.spinnerName)
      getRawVueData(this.spinnerName)
    }
  }
</script>

<style scoped lang="scss">
  @import "../sass/variables";

  * {
    box-sizing: border-box;
  }

  .modal-mask {
    cursor: default;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
  }

  .modal-container {
    width: 540px;
    height: 540px;
    color: #100f0f;
    margin: 40px auto 0;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 2px 20px 0 rgba(104, 37, 113, 0.5);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: center;
    align-items: center;
    justify-content: center;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @media (max-width: $screen-xs-max) {
    .modal-container {
      width: 365px;
    }
  }

</style>