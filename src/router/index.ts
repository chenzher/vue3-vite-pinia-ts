import { commonRouters } from './common';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/components/layout/Layout.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/page/home/index.vue'),
        meta: {
          title: '首页',
          pageLevel: 1,
        },
      },
    ],
  },
  ...commonRouters,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
