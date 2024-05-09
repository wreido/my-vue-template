import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    base: env.VITE_ENV === 'development' ? './' : '/d/my-vue-template/dist/',
    plugins: [
      vue(),
      vueSetupExtend(),
      vueJsx(),
      VueDevTools(),
      AutoImport({
        resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'Icon' })]
      }),
      Components({
        resolvers: [IconsResolver({ enabledCollections: ['ep'] }), ElementPlusResolver()]
      }),
      Icons({ autoInstall: true })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
