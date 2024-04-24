const routes = [
  {
    path: '/shopping',
    name: 'Shopping',
    children: [
      {
        path: '/shopping/goods',
        name: 'Goods',
        children: [
          {
            path: '/shopping/goods/list',
            name: 'GoodsList',
            component: () =>
              import(/* webpackChunkName: "goodsList" */ '@/views/shopping/goods/list/index.vue'),
            meta: { title: '商品列表' }
          }
        ]
      }
    ]
  }
]

export default routes
