import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    perms?: Array<String>
    name?: String
    hidden?: Boolean
    [key: string]: any
  }
}
