<template>
  <div @click="login">登陆</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { setToken } from '@/utils/auth'
let Router = useRouter()

const login = () => {
  setToken(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRUeXBlIjowLCJjcmVhdGVUaW1lIjoxNzE5Nzk5NzE2MTgxLCJleHAiOjE3MjAwNTg5MTYsInVzZXJJZCI6MX0.sm2X0ubkfEbwdUwXV1olndA8YN7Miaxtkyops4VDzMQ'
  )
  Router.push('/')
}
</script>
