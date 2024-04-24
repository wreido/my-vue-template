<template>
  <section class="app-main">
    <Breadcrumb />

    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>

    <div @click="test">按钮</div>
  </section>
</template>

<script setup lang="ts" name="AppMain">
import Breadcrumb from './Breadcrumb.vue'
import { useRouter } from 'vue-router'

let router = useRouter()

const test = () => {
  router.push('/shopping/goods/list')
}
</script>

<style scoped lang="scss">
.app-main {
  width: 100%;
  min-height: 100%;
}
</style>
