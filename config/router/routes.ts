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
                redirect: '/sanguo',
            },
            {
                path: '/HOME',
                code: 'HOME',
                name: '首页',
                component: './home',
                // wrappers: ['@/wrappers/auth'],
            },
            {
                path: '/CLIENT_SOURCE',
                code: 'CLIENT_SOURCE',
                name: '客户资料',
                component: './client',
                // wrappers: ['@/wrappers/auth'],
            },
            {
                path: '/sanguo',
                code: 'sanguo',
                name: '三国志战略版',
                component: './sanguo',
                // wrappers: ['@/wrappers/auth'],
            },
            {
                path: '*',
                component: './404',
            },
        ],
    },
    {
        path: '*',
        component: './404',
    },
];
