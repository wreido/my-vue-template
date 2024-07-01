import router from '@/router'
import Layout from '@/layout/index.vue'
import { usePermissionStore, useUserStore } from '@/stores'
import { getToken } from '@/utils/auth'
import { asyncRoutes } from '@/router'
import type { RouteRecordRaw } from 'vue-router'

const whiteList = ['/user/login']

const init = async () => {
  try {
    const { getUserInfo, userInfo } = useUserStore()
    const { generateRoutes } = usePermissionStore()
    let accessRoutes: RouteRecordRaw[] = []
    let flatRoutes: RouteRecordRaw[] = []

    asyncRoutes.forEach((route) => {
      if (route.children && route.children.length > 0) {
        route.children.forEach((child) => {
          child.component = child.component || Layout
        })
      } else {
        router.addRoute({ path: '/', redirect: route.path })
      }
      router.addRoute(route)
    })

    console.log(router.getRoutes())

    if (getToken()) {
      if (userInfo.perms.length === 0) await getUserInfo()
      accessRoutes = await generateRoutes(userInfo.perms)
      flatRoutes = flattenRoutes(JSON.parse(JSON.stringify(accessRoutes)))
      router.addRoute({ path: '/', redirect: flatRoutes[0].path })
    }

    router.beforeEach(async (to, from, next) => {
      if (getToken()) {
        if (userInfo.perms.length === 0) {
          await getUserInfo()
          accessRoutes = await generateRoutes(userInfo.perms)
          flatRoutes = flattenRoutes(JSON.parse(JSON.stringify(accessRoutes)))
          router.addRoute({ path: '/', redirect: flatRoutes[0].path })
          next(flatRoutes[0].path)
        } else {
          const accessRoutesNameList = flatRoutes.map((route) => route.path)
          const asyncRoutesNameList = flattenRoutes(JSON.parse(JSON.stringify(asyncRoutes))).map(
            (route) => route.path
          )

          if (asyncRoutesNameList.includes(to.path)) {
            if (accessRoutesNameList.includes(to.path)) {
              next()
            } else {
              next(`/error/noPermission`)
            }
          } else {
            next(`/error/notFound`)
          }
        }
      } else {
        if (whiteList.indexOf(to.path) !== -1) {
          next()
        } else {
          next(`/user/login`)
        }
      }
    })
  } catch (error) {
    console.error('Failed to initialize routes:', error)
  }
}

function flattenRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  const flattenedRoutes: RouteRecordRaw[] = []
  ;(function flatten(routes) {
    routes.forEach((route) => {
      if (route.children && route.children.length) {
        flatten(route.children)
        delete route.children
      }
      flattenedRoutes.push(route)
    })
  })(routes)
  return flattenedRoutes
}

export default init
