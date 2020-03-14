export default [
    {
        path: '/',
        component: '../layouts/index',
        Routes: ['./src/layouts/Authentication.tsx'],
        routes: [
            {
                path: '/',
                component: './index',
                Routes: ['./src/pages/Authentication.tsx'],
            },
        ],
    },
];
