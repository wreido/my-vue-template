import router from '@/router'
import Layout from '@/layout/index.vue'
import { usePermission } from '@/stores'
import type { RouteRecordRaw } from 'vue-router'

// const whiteList = ['/login', '/auth-redirect']

// const perms = ['shopping', 'shopping:goods', 'shopping:goods:list']

// router.beforeEach(async (to, from, next) => {
//   if (!to.redirectedFrom) {
//     if (perms.length > 0) {
//       const permission = usePermission()
//       const accessRoutes: Array<RouteRecordRaw> = await permission.generateRoutes(perms)
//       const flag: Array<RouteRecordRaw> = accessRoutes.flatMap((item) =>
//         item.children ? item.children.map((r: any) => ({ ...r, component: Layout })) : []
//       )
//       flag.forEach((routerItem) => router.addRoute(routerItem))
//     }
//     next(to.path)
//   } else {
//     next()
//   }
// })

const init = async () => {
  const perms = ['shopping', 'shopping:goods', 'shopping:goods:list']
  const permission = usePermission()
  const accessRoutes: Array<RouteRecordRaw> = await permission.generateRoutes(perms)

  const flag: Array<RouteRecordRaw> = accessRoutes.flatMap((item) =>
    item.children ? item.children.map((r: any) => ({ ...r, component: Layout })) : []
  )
  flag.forEach((routerItem) => router.addRoute(routerItem))

  console.log(router.getRoutes())
}

export default init
