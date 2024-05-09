<template>
  <section class="menu-box">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="1-4"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in permission.accessedRoutes" :key="item.name">
        <template v-if="!item.meta?.hidden">
          <SubMenu v-for="subMenu in item.children" :key="subMenu.name" :subMenu="subMenu" />
        </template>
      </template>
    </el-menu>
  </section>
</template>

<script setup lang="ts" name="Menu">
import { usePermission } from '@/stores'
import SubMenu from './SubMenu.vue'

const permission = usePermission()
console.log(permission.accessedRoutes)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.menu-box {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  padding-bottom: 100px;
  // padding-inline: 8px;
  ::v-deep {
    .el-menu {
      border-right: none;
    }
  }
}
</style>
