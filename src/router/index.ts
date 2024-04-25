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
  },
  {
    path: '/test',
    name: 'test',
    component: Layout,
    children: [
      {
        name: 'Test1',
        path: '/test/aaa',
        component: () => import('@/views/shopping/goods/list/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router

export { asyncRoutes }
