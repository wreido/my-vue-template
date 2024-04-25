import { defineStore } from 'pinia'
import { asyncRoutes } from '@/router'
import type { RouteRecordRaw } from 'vue-router'

type UsePermission = {
  accessedRoutes: Array<RouteRecordRaw>
}

const usePermission = defineStore({
  id: 'user',
  state: (): UsePermission => ({
    accessedRoutes: []
  }),
  actions: {
    generateRoutes(perms: string[]) {
      return new Promise((resolve) => {
        let accessedRoutes: Array<RouteRecordRaw> = []
        if (perms.includes('*')) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, perms)
        }
        this.accessedRoutes = accessedRoutes
        resolve(accessedRoutes)
      })
    }
  },
  getters: {
    // doubleCount: ({ count }) => count * 2
  },
  persist: true
  // persist: [
  //   {
  //     paths: ['toLocal'],
  //     storage: localStorage,
  //   },
  //   {
  //     paths: ['count'],
  //     storage: sessionStorage,
  //   },
  // ],
})

function hasPermission(perms: string[], route: RouteRecordRaw) {
  if (route.meta && route.meta.perms) {
    return perms.some((perm) => route.meta?.perms?.includes(perm))
  } else {
    return true
  }
}

export function filterAsyncRoutes(routes: Array<RouteRecordRaw>, perms: string[]) {
  const res: Array<RouteRecordRaw> = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(perms, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, perms)
      }
      res.push(tmp)
    }
  })
  return res
}

export default usePermission
