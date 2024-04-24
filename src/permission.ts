import router from '@/router'
import { asyncRoutes } from '@/router'

const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to, from, next) => {
  console.log('to', to)
  console.log('from', from)

  asyncRoutes.forEach((routerItem) => {
    return router.addRoute(routerItem.name as string, routerItem)
  })

  console.log(router.getRoutes())

  next()
})

router.afterEach(() => {})
