import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { usePermission } from '@/stores'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

import App from './App.vue'
import router from './router'
// import './permission'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

const perms = ['shopping', 'shopping:goods', 'shopping:goods:list']
const permission = usePermission()
const accessRoutes: Array<RouteRecordRaw> = await permission.generateRoutes(perms)

const flag: Array<RouteRecordRaw> = accessRoutes.flatMap((item) =>
  item.children ? item.children.map((r: any) => ({ ...r, component: Layout })) : []
)
flag.forEach((routerItem) => router.addRoute(routerItem))

console.log(4234234234)

app.use(router)

app.mount('#app')
