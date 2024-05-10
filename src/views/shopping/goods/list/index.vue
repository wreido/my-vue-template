<template>
  <el-main style="background-color: #ffffff">
    <div>商品列表</div>
    <button @click="test">按钮</button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-main>
</template>

<script setup lang="ts" name="GoodsList">
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
</script>
