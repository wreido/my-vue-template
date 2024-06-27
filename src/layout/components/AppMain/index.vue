<template>
  <section class="app-main">
    <Breadcrumb />
    <el-main class="app-container">
      <router-view />
    </el-main>
  </section>
</template>

<script setup lang="ts" name="AppMain">
import Breadcrumb from './Breadcrumb.vue'
</script>

<style scoped lang="scss">
.app-main {
  width: 100%;
  min-height: 100%;
  .app-container {
    background-color: #ffffff;
  }
}

.dark {
  .app-main {
    .app-container {
      background-color: #202032;
    }
  }
}
</style>
