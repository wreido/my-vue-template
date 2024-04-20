<template>
  <el-config-provider :locale="locale" :size="size" :z-index="zIndex">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const locale = zhCn
const size = ref('small')
const zIndex = ref(3000)

console.log(import.meta.env)
</script>
