<template>
  <section class="menu-box">
    <el-menu
      class="el-menu-vertical-demo"
      router
      :default-active="route.path"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <template v-for="item in permission.accessedRoutes" :key="item.name">
        <template v-if="!item.meta?.hidden && $route.path.indexOf(`${item.path}`) !== -1">
          <SubMenu v-for="subMenu in item.children" :key="subMenu.name" :subMenu="subMenu" />
        </template>
      </template>
    </el-menu>
  </section>
</template>

<script setup lang="ts" name="Menu">
import { ref } from 'vue'
import { usePermissionStore } from '@/stores'
import { useRoute } from 'vue-router'
import SubMenu from './SubMenu.vue'

const permission = usePermissionStore()
const route = useRoute()
const isCollapse = ref(false)
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
  ::v-deep(.el-menu) {
    border-right: none;
  }
}
</style>
