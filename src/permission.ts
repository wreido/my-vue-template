import router from '@/router'
import { asyncRoutes } from '@/router'
import Layout from '@/layout/index.vue'
// import type { RouteRecordName } from 'vue-router'

// const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to, from, next) => {
  const flag = asyncRoutes.flatMap((item) =>
    item.children ? item.children.map((r: any) => ({ ...r, component: Layout })) : []
  )
  flag.forEach((routerItem) => router.addRoute(routerItem))
  next()
})

router.afterEach(() => {})
