const routes = [
  {
    path: '/operation',
    name: 'Operation',
    children: [
      {
        path: '/operation/summary',
        name: 'Summary',
        children: [
          {
            path: '/operation/summary/cateSellStatisticsProportion',
            name: 'CateSellStatisticsProportion',
            component: () => () =>
              import(/* webpackChunkName: "about" */ '@/views/shopping/goods/list/index.vue'),
            meta: { title: '品类重点分析' }
          }
        ]
      }
    ]
  }
]

export default routes
