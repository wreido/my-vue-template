import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import init from './permission'
// import './permission1'
import './assets/styles/main.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

async function call() {
  const app = createApp(App)
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)

  await init()

  app.use(router)
  app.mount('#app')
}

call()

// const app = createApp(App)
// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)
// app.use(pinia)

// app.use(router)
// app.mount('#app')
