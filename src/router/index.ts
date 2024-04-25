import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('./modules/**/*.ts', { eager: true }) as any

let asyncRoutes: Array<RouteRecordRaw> = []

for (const path in modules) {
  asyncRoutes = asyncRoutes.concat(modules[path].default)
}

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router

export { asyncRoutes }

///11111111111111111111
const comps = import.meta.glob('../views/**/index.vue')
const pages = import.meta.glob('../views/**/index.config.ts', { eager: true, import: 'default' })
const routes1 = Object.entries(pages).map(([path, meta]) => {
  const compPath = path.replace('page.js', 'index.vue')
  path = path.replace('../views', '').replace('/index.config.ts', '') || '/'
  const name = path.split('/').filter(Boolean).join('-') || 'index'

  return {
    path,
    name,
    meta,
    component: comps[compPath]
  }
})

console.log(routes1)
console.log(comps)
console.log(pages)
