<template>
  <section class="app-main">
    <Breadcrumb />
    <router-view />
  </section>
</template>

<script setup lang="ts" name="AppMain">
import Breadcrumb from './Breadcrumb.vue'
</script>

<style scoped lang="scss">
.app-main {
  width: 100%;
  min-height: 100%;
}
</style>
