import type { DirectiveBinding } from 'vue'
import { useUserStore } from '@/stores'

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding
  const {
    userInfo: { perms }
  } = useUserStore()

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value

      const hasPermission =
        perms.indexOf('*') >= 0
          ? true
          : perms.some((role) => {
              return permissionRoles.includes(role)
            })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need perms! Like v-permission="['admin','editor']"`)
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
  update(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  }
}
