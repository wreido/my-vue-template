<template>
  <div class="header-warpper">
    <section class="logo"><img src="@/assets/image/logo.svg" alt="" /></section>
    <section class="menu">
      <template v-for="router in accessedRoutes" :key="router.path">
        <div
          class="item"
          :class="route.path.indexOf(`${router.path}`) !== -1 ? 'item curr' : 'item'"
          v-if="!router.meta?.hidden && router.meta?.name"
          @click="changeRouterModule(router)"
        >
          {{ router.meta?.name }}
        </div>
      </template>
    </section>
    <section class="user-info">
      <el-switch
        v-model="themeStatus"
        size="large"
        :active-action-icon="Sunny"
        :inactive-action-icon="Moon"
        @change="changeTheme"
      />
    </section>
  </div>
</template>

<script setup lang="ts" name="Header">
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
import { usePermissionStore, useSystemStore } from '@/stores'
import { Sunny, Moon } from '@element-plus/icons-vue'

//路由模块切换
const { accessedRoutes } = usePermissionStore()
const router = useRouter()
const route = useRoute()

const changeRouterModule = (item: RouteRecordRaw) => {
  const fatherRoute = accessedRoutes.find((el) => el.path === item.path)

  const path =
    fatherRoute?.children?.[0]?.children?.[0]?.path ||
    fatherRoute?.children?.[0]?.path ||
    fatherRoute?.path ||
    '/'

  router.push({ path })
}

//主题切换
const { theme, setTheme } = useSystemStore()
const themeStatus = ref(true)
const htmlDome = document.getElementsByTagName('html')[0]
const themeMedia = window.matchMedia('(prefers-color-scheme: light)')

if (theme) {
  themeStatus.value = theme === 'light'
} else {
  themeStatus.value = themeMedia.matches
}

htmlDome.className = theme ? theme : themeStatus.value ? 'light' : 'dark'

//监听系统主题
themeMedia.addEventListener('change', (e) => {
  if (e.matches) {
    //light
    themeStatus.value = true
    htmlDome.className = 'light'
    setTheme('light')
  } else {
    //dark
    themeStatus.value = false
    htmlDome.className = 'dark'
    setTheme('dark')
  }
})

const changeTheme = () => {
  htmlDome.className = themeStatus.value ? 'light' : 'dark'
  setTheme(themeStatus.value ? 'light' : 'dark')
}
</script>

<style scoped lang="scss">
.header-warpper {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  .logo {
    flex-shrink: 0;
    min-width: 190px;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .menu {
    flex: 1;
    display: flex;
    .item {
      height: 100%;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      margin: 0 10px;
      cursor: pointer;
      border-radius: 5px;
      &.curr {
        background: rgb(94, 94, 107);
      }
      &:hover {
        background: rgb(94, 94, 107);
      }
    }
  }
  .user-info {
    flex-shrink: 0;
  }
}
</style>
