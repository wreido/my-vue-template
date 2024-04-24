<template>
  <section class="menu-box">
    <div>{{ aa }}</div>
    <div>{{ aa }}</div>
    <div>{{ aa }}</div>
    <div>{{ aa }}</div>
  </section>
</template>

<script setup lang="ts" name="Menu">
import { ref } from 'vue'

const aa = ref(0)
</script>

<style scoped lang="scss">
.menu-box {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  padding-bottom: 100px;
  padding-inline: 8px;
}
</style>
