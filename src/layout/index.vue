<template>
  <div class="app-warpper">
    <section class="app-header">
      <Header />
    </section>
    <section class="app-body">
      <section class="app-aside">
        <el-icon size="20"><i-ep-edit /></el-icon>
      </section>
      <section class="app-container">{{ test }}</section>
    </section>
  </div>
</template>

<script setup lang="ts" name="Layout">
import Header from './components/Header/index.vue'
import { ref } from 'vue'

let test = ref(0)

console.log(111)
</script>

<style scoped lang="scss">
.app-warpper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  .app-header {
    flex-shrink: 0;
    background-color: #202032;
    height: 70px;
  }
  .app-body {
    flex: 1;
    display: flex;
    background-color: #f2f7fe;
    .app-aside {
      flex-shrink: 0;
      width: 230px;
      background-color: #ffffff;
    }
    .app-container {
      flex: 1;
    }
  }
}
</style>
