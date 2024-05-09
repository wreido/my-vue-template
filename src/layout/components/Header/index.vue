<template>
  <div class="header-warpper">
    <section class="logo"></section>
    <section class="menu">
      <template v-for="router in permission.accessedRoutes" :key="router.path">
        <div
          class="item"
          v-if="!router.meta?.hidden && router.meta?.name"
          @click="changeRouterModule(router)"
        >
          {{ router.meta?.name }}
        </div>
      </template>
    </section>
    <section class="user-info"></section>
  </div>
</template>

<script setup lang="ts" name="Header">
import type { RouteRecordRaw } from 'vue-router'
import { useRouter } from 'vue-router'
import { usePermission } from '@/stores'

const permission = usePermission()
const router = useRouter()

const changeRouterModule = (item: RouteRecordRaw) => {
  const fatherRoute = permission.accessedRoutes.find((el) => el.path === item.path)

  const path =
    fatherRoute?.children?.[0]?.children?.[0]?.path ||
    fatherRoute?.children?.[0]?.path ||
    fatherRoute?.path ||
    '/'

  router.push({ path })
}
</script>

<style scoped lang="scss">
.header-warpper {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  .logo {
    flex-shrink: 0;
    min-width: 230px;
  }
  .menu {
    flex: 1;
    display: flex;
    .item {
      height: 100%;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      margin: 0 10px;
      cursor: pointer;
      border-radius: 5px;
      &.curr {
        background: rgb(94, 94, 107);
      }
      &:hover {
        background: rgb(94, 94, 107);
      }
    }
  }
  .user-info {
    flex-shrink: 0;
  }
}
</style>
