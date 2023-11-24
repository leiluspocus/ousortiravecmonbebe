import './assets/main.css'

import { createPlausible } from 'v-plausible/vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const plausible = createPlausible({
  init: {
    domain: 'ousortiravecmonbebe.com',
    apiHost: 'https://plausible.io',
    trackLocalhost: false
  },
  settings: {
    enableAutoOutboundTracking: true,
    enableAutoPageviews: true
  },
  partytown: false
})

app.use(createPinia())
app.use(router)
app.use(plausible)

app.mount('#app')
