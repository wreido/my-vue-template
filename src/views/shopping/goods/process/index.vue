<template>
  <el-button type="primary" plain @click="test">跳转商品列表</el-button>
</template>

<script setup lang="ts" name="GoodsProcess">
import { useRouter } from 'vue-router'

let Router = useRouter()
const test = () => {
  Router.push('/shopping/goods/list')
}
</script>
