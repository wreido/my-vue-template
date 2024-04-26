import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'
import asyncRoutes from './asyncRoutes'

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

console.log(asyncRoutes)
