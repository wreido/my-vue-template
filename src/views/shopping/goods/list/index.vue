<template>
  <div>商品列表</div>
  <el-button @click="get">发送get请求</el-button>
  <el-button @click="post">发送post请求</el-button>
  <el-button type="primary" @click="retryGet">重复执行GET请求</el-button>
  <el-button type="primary" plain @click="test">跳转商品审核</el-button>
  <el-table :data="tableData" stripe style="width: 100%" v-permission="['shopping/goods/list']">
    <el-table-column prop="date" label="时间" />
    <el-table-column prop="name" label="名字" />
    <el-table-column prop="address" label="地址" />
  </el-table>
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
  useRequest.get({ url: '/homeOverview/tradeSummary' }).then((res) => console.log('GET:', res))
}

const post = () => {
  useRequest
    .post({ url: '/homeOverview/tradeSummary', data: { message: 'POST' } })
    .then((data) => console.log('POST:', data))
}

const retryGet = () => {
  useRequest
    .post({ url: '/homeOverview/tradeSummary' })
    .then((res) => console.log('GET:', res))
    .catch((err) => {
      console.log('Err', err)
    })
}

post()
</script>
