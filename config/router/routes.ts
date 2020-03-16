export default [
  {
    path: '/login',
    component: './login',
  },
  {
    path: '/',
    component: '@/layouts/index',
    access: 'index',
    routes: [
      {
        path: '/',
        component: './home',
      },
      {
        path: '/test',
        component: './test',
        wrappers: ['@/wrappers/auth'],
      },
    ],
  },
  {
    path: '*',
    component: './404',
  },
];
