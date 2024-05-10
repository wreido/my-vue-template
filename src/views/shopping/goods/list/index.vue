<template>
  <div>商品列表</div>
  <button @click="test">按钮</button>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
  <div style="height: 500px">商品列表</div>
</template>

<script setup lang="ts" name="GoodsList">
import { useRouter } from 'vue-router'

let Router = useRouter()

const test = () => {
  Router.push('/shopping/goods/process')
}
</script>
