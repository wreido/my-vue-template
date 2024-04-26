import type { RouteRecordRaw, RouteMeta } from 'vue-router'

const comps = import.meta.glob('../views/**/index.vue')
const pages = import.meta.glob('../views/**/index.config.ts', { eager: true, import: 'default' })
const first: Array<RouteRecordRaw> = []
const second: Array<RouteRecordRaw> = []
const three: Array<RouteRecordRaw> = []

Object.entries(pages).map(([path, meta]) => {
  const compPath = path.replace('index.config.ts', 'index.vue')
  path = path.replace('../views/', '').replace('/index.config.ts', '') || '/'

  const name = path
    .split('/')
    .map((item) => `${item.charAt(0).toUpperCase()}${item.substring(1, item.length)}`)
    .join('')

  const route: RouteRecordRaw = {
    path: `/${path}`,
    name,
    meta: meta as RouteMeta,
    component: comps[compPath],
    children: []
  }

  switch (path.split('/').length) {
    case 1:
      first.push(route)
      break
    case 2:
      second.push(route)
      break
    case 3:
      three.push(route)
      break
  }
})

function mergeRouter(routerArry: Array<Array<RouteRecordRaw>>) {
  const flag: Array<RouteRecordRaw> = []

  routerArry[0].forEach((fatherRouter: RouteRecordRaw) => {
    const currSecond: RouteRecordRaw = {
      ...fatherRouter
    }
    routerArry[1].forEach((childrenRouter) => {
      if (childrenRouter.path.includes(fatherRouter.path)) {
        currSecond?.children?.push(childrenRouter)
      }
    })

    flag.push(currSecond)
  })

  return flag
}

export default mergeRouter([first, mergeRouter([second, three])])
