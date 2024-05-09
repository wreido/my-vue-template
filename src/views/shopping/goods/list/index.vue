<template>
  <div>商品列表</div>
  <button @click="test">按钮</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

let Router = useRouter()

const test = () => {
  Router.push('/shopping/goods/process')
}
</script>
