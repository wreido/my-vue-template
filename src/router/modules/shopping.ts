const routes = [
  {
    path: '/shopping',
    name: 'Shopping',
    meta: { title: '商城', perms: [] },
    children: [
      {
        path: '/shopping/goods',
        name: 'Goods',
        meta: { title: '商品管理', perms: [] },
        children: [
          {
            path: '/shopping/goods/list',
            name: 'GoodsList',
            component: () =>
              import(/* webpackChunkName: "goodsList" */ '@/views/shopping/goods/list/index.vue'),
            meta: { title: '商品列表', perms: [] }
          }
        ]
      }
    ]
  }
]

export default routes
