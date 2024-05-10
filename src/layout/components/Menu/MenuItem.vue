<template>
  <template v-if="!menuItem.meta?.hidden">
    <el-menu-item :index="menuItem.path">
      <el-icon v-if="menuItem.meta?.icon"><component :is="ICON[menuItem.meta?.icon]" /></el-icon>
      <span> {{ menuItem.meta?.name }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts" name="MenuItem">
import { reactive } from 'vue'
import * as Icons from '@element-plus/icons-vue'

defineProps({
  menuItem: {
    type: Object,
    require: true,
    default: () => {
      return {}
    }
  }
})

const ICON: any = reactive(Icons)
</script>
