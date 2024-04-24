import router from '@/router'
import { asyncRoutes } from '@/router'
import Layout from '@/layout/index.vue'
import type { RouteRecordName } from 'vue-router'

// const whiteList = ['/login', '/auth-redirect']

const flag = asyncRoutes.flatMap((item) =>
  item.children ? item.children.map((r: any) => ({ ...r, component: Layout })) : []
)

router.beforeEach(async (to, from, next) => {
  console.log('to', to)
  console.log('from', from)

  // const flag = asyncRoutes.flatMap((item) =>
  //   item.children ? item.children.map((r: any) => ({ ...r, component: Layout })) : []
  // )

  // console.log(flag)

  flag.forEach((routerItem) => {
    return router.addRoute(routerItem)
  })

  console.log(router.getRoutes())

  next()
})

router.afterEach(() => {})
