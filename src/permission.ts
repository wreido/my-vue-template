import router from '@/router'
import Layout from '@/layout/index.vue'
import { usePermission } from '@/stores'

const init = async () => {
  try {
    const perms = ['shopping', 'shopping:goods', 'shopping:goods:list']
    const { generateRoutes } = usePermission()
    const accessRoutes = await generateRoutes(perms)

    accessRoutes.forEach((route, i) => {
      if (route.children && route.children.length > 0) {
        route.children.forEach((child, j) => {
          child.component = child.component || Layout
          if (i === 0 && j === 0) {
            router.addRoute({
              path: '/',
              redirect:
                child.children && child.children?.length > 0 ? child.children[0].path : child.path
            })
          }
        })
      } else {
        router.addRoute({ path: '/', redirect: route.path })
      }
      router.addRoute(route)
    })

    console.log(accessRoutes)
    console.log(router)
  } catch (error) {
    console.error('Failed to initialize routes:', error)
  }
}

export default init
