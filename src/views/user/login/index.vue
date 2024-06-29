<template>
  <div @click="login">登陆</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { setToken } from '@/utils/auth'
let Router = useRouter()

const login = () => {
  console.log(131)
  setToken(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRUeXBlIjowLCJjcmVhdGVUaW1lIjoxNzE5NDcwMTgyODIwLCJleHAiOjE3MTk3MjkzODIsInVzZXJJZCI6MX0.wo8uRVLs8qtTYXrmYjMU0xkSwV9OZ6bDcYg60Ta_fP0'
  )

  Router.push('/')
}
</script>
