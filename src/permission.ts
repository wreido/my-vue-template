import router from '@/router'
import Layout from '@/layout/index.vue'
import { usePermission } from '@/stores'

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
