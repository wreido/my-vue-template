<template>
  <template v-if="!subMenu.meta?.hidden">
    <template v-if="subMenu.children && subMenu.children?.length > 0">
      <el-sub-menu :index="subMenu.path">
        <template #title>{{ subMenu.meta?.name }}</template>
        <menu-item
          v-for="menu in subMenu.children"
          :index="menu.path"
          :key="menu.name"
          :menuItem="menu"
        />
      </el-sub-menu>
    </template>
    <template v-else>
      <menu-item :menuItem="subMenu" />
    </template>
  </template>
</template>

<script setup lang="ts" name="Menu">
import MenuItem from './MenuItem.vue'
defineProps({
  subMenu: {
    type: Object,
    require: true,
    default: () => {
      return {}
    }
  }
})
</script>
