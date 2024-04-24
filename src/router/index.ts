import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const modules = import.meta.glob('./modules/**/*.ts', { eager: true }) as any

let asyncRoutes: RouteRecordRaw[] = []

for (const path in modules) {
  asyncRoutes = asyncRoutes.concat(modules[path].default)
}

const constantRoutes = [
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
