import router from '@/router'
import Layout from '@/layout/index.vue'
import { usePermission } from '@/stores'

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
  try {
    const perms = ['shopping', 'shopping:goods', 'shopping:goods:list']
    const { generateRoutes } = usePermission()
    const accessRoutes = await generateRoutes(perms)

    accessRoutes.forEach((route) => {
      if (route.children && route.children.length > 0) {
        route.children.forEach((child) => {
          child.component = child.component || Layout
        })
      }
      router.addRoute(route)
    })

    console.log(accessRoutes)
  } catch (error) {
    console.error('Failed to initialize routes:', error)
  }
}

export default init
