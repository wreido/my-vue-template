<script setup lang="ts">
import { ref } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

const a = ref(0)

const test = () => {
  a.value = a.value + 1
}
</script>

<template>
  <main>
    {{ a }}
    <div @click="test">按钮</div>
    <TheWelcome />
  </main>
</template>
