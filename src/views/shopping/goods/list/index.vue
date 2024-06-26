<template>
  <el-main style="background-color: #ffffff">
    <div>商品列表</div>
    <button @click="get">发送get请求</button>
    <button @click="post">发送post请求</button>
    <button @click="retryGet">重复执行GET请求</button>
    <button @click="test">跳转商品审核</button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-main>
</template>

<script setup lang="ts" name="GoodsList">
import useRequest from '@/server/http/index'
import { useRouter } from 'vue-router'

let Router = useRouter()

const test = () => {
  Router.push('/shopping/goods/process')
}

const tableData = [
  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' }
]

const get = () => {
  useRequest.get({ url: '/a' }).then((res) => console.log('GET:', res))
}

const post = () => {
  useRequest
    .post({ url: '/b', data: { message: 'POST' } })
    .then((data) => console.log('POST:', data))
}

const retryGet = () => {
  useRequest
    .get({ url: '/c' })
    .then((res) => console.log('GET:', res))
    .catch((err) => {
      console.log('Err', err)
    })
}
</script>
