import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import Clipboard from 'v-clipboard'
import { router } from './router'

import App from './App.vue'

const app = createApp(App)

app.use(Clipboard)

app.use(router)

app.use(createGtm({
  id: 'GTM-LTWCCC0LDR',
  enabled: true, //process.env.NODE_ENV === 'production',
  vueRouter: router
}))

app.mount('#app')
