import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const asyncRoutes = []

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
