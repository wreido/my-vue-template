const routes = [
  {
    path: '/shopping',
    name: 'Shopping',
    meta: { title: '商城', perms: ['shopping'] },
    children: [
      {
        path: '/shopping/goods',
        name: 'Goods',
        meta: { title: '商品管理', perms: ['shopping:goods'] },
        children: [
          {
            path: '/shopping/goods/list',
            name: 'GoodsList',
            component: () =>
              import(/* webpackChunkName: "goodsList" */ '@/views/shopping/goods/list/index.vue'),
            meta: { title: '商品列表', perms: ['shopping:goods:list'] }
          }
        ]
      }
    ]
  }
]

export default routes
