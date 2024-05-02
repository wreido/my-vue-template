<template>
  <section class="menu-box">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="1-4"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in permission.accessedRoutes" :key="item.name">
        <template v-if="!item.meta?.hidden">
          <template v-for="subMenu in item.children" :key="subMenu.name">
            <template v-if="subMenu.children && subMenu.children?.length > 0">
              <el-sub-menu :index="subMenu.path">
                <template #title>{{ subMenu.meta?.name }}</template>
                <template v-if="!subMenu.meta?.hidden">
                  <el-menu-item
                    :index="menu.path"
                    v-for="menu in subMenu.children"
                    :key="menu.name"
                  >
                    {{ menu.meta?.name }}
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :index="subMenu.path">
                {{ subMenu.meta?.name }}
              </el-menu-item>
            </template>
          </template>
        </template>
      </template>
    </el-menu>
  </section>
</template>

<script setup lang="ts" name="Menu">
import { usePermission } from '@/stores'
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
