import { RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/components/layout/Layout.vue');

export const commonRouters: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'aboutIndex',
        component: () => import('@/page/home/index.vue'),
        meta: {
          title: '测试页',
          pageLevel: 1,
        },
      },
    ],
  },
];
