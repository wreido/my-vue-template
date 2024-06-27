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
  max-width: 100vw;
  min-height: 100vh;
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    background-color: #202032;
    height: 70px;
  }
  .app-body {
    background-color: #f2f7fe;
    .app-aside {
      position: fixed;
      top: 0;
      left: 0;
      flex-shrink: 0;
      width: 230px;
      // width: 80px;
      height: 100vh;
      padding-top: 70px;
      background-color: #ffffff;
    }
    .app-container {
      max-width: 100vw;
      min-height: 100vh;
      padding: 90px 20px 20px 250px;
    }
  }
}
.dark {
  .app-warpper {
    .app-body {
      background-color: #111111;
    }
    .app-aside {
      background-color: #202032;
    }
  }
}
</style>
