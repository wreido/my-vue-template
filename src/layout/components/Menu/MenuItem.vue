<template>
  <template v-if="!menuItem.meta?.hidden">
    <el-menu-item :index="menuItem.path">
      {{ menuItem.meta?.name }}
    </el-menu-item>
  </template>
</template>

<script setup lang="ts" name="Menu">
import { defineProps } from 'vue'
defineProps({
  menuItem: {
    type: Object,
    require: true,
    default: () => {
      return {}
    }
  }
})
</script>
