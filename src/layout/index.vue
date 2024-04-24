<template>
  <div class="app-warpper">
    <section class="app-header">
      <Header />
    </section>
    <section class="app-body">
      <section class="app-aside">
        <Menu />
      </section>
      <section class="app-container">
        <AppMain />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts" name="Layout">
import Header from './components/Header/index.vue'
import Menu from './components/Menu/index.vue'
import AppMain from './components/AppMain/index.vue'
</script>

<style scoped lang="scss">
.app-warpper {
  width: 100vw;
  min-height: 100vh;
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #202032;
    height: 70px;
  }
  .app-body {
    display: flex;
    background-color: #f2f7fe;

    .app-aside {
      flex-shrink: 0;
      width: 230px;
      height: 100vh;
      padding-top: 70px;
      background-color: #ffffff;
    }
    .app-container {
      flex: 1;
      padding: 82px 12px 12px 12px;
    }
  }
}
</style>
