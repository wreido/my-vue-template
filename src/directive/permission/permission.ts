import store from '@/store'

function checkPermission(el, binding) {
  const { value } = binding
  const perms = store.getters && store.getters.perms

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
  inserted(el, binding) {
    checkPermission(el, binding)
  },
  update(el, binding) {
    checkPermission(el, binding)
  }
}
