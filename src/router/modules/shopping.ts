import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/shopping',
    name: 'Shopping',
    children: [
      {
        path: '/shopping/goods',
        name: 'Goods',
        component: Layout,
        children: [
          {
            path: '/shopping/goods/list',
            name: 'GoodsList',
            component: () => () =>
              import(/* webpackChunkName: "about" */ '@/views/shopping/goods/list/index.vue'),
            meta: { title: '商品列表' }
          }
        ]
      }
    ]
  }
]

export default routes
