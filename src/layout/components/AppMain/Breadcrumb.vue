<template>
  <el-breadcrumb separator=">">
    <template v-for="(item, index) in breadList">
      <el-breadcrumb-item v-if="item.name" :key="item.name" :test="index" :to="changeRoute(item)">
        {{ item.meta?.name }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts" name="Breadcrumb">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

let route = useRoute()
let breadList = ref<RouteRecordRaw[]>([])

onMounted(() => {
  getMatched()
})

watch(
  () => route.path,
  () => {
    breadList.value = route.matched.filter((item) => item.meta && item.meta.name)
  }
)

let getMatched = () => {
  breadList.value = route.matched.filter((item) => item.meta && item.meta.name)
}

const changeRoute = (routerItem: RouteRecordRaw) => {
  const path =
    routerItem?.children?.[0]?.children?.[0]?.path ||
    routerItem?.children?.[0]?.path ||
    routerItem?.path ||
    '/'

  return path
}
</script>
