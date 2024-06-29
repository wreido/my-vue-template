import router from '@/router'
import Layout from '@/layout/index.vue'
import { usePermissionStore, useUserStore } from '@/stores'
import { getToken } from '@/utils/auth'
import { asyncRoutes } from '@/router'
import type { RouteRecordRaw } from 'vue-router'

const whiteList = ['/user/login']

const init = async () => {
  try {
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

    router.beforeEach(async (to, from, next) => {
      if (getToken()) {
        const { getUserInfo, userInfo } = useUserStore()
        if (userInfo.perms.length === 0) await getUserInfo()
        const { generateRoutes } = usePermissionStore()
        const accessRoutes = await generateRoutes(userInfo.perms)
        const flatRoutes = flattenRoutes(JSON.parse(JSON.stringify(accessRoutes)))
        const accessRoutesNameList = flatRoutes.map((route) => route.path)

        if (accessRoutesNameList.includes(to.path)) {
          next()
        } else {
          alert('没有权限')
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
