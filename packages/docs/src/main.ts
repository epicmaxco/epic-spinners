import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import { router } from './router'

// @ts-ignore
import Clipboard from 'v-clipboard' // We need to update deps, this is done to prevent ts from complaining on missing declarations.

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
