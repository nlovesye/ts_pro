const path = require('path');
import { IConfig } from 'umi-types';
import routes from './routes';

// ref: https://umijs.org/config/
const config: IConfig = {
    treeShaking: true,
    routes,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: {
                    immer: true,
                },
                dynamicImport: { webpackChunkName: true },
                title: 'sscm',
                dll: true,
                locale: {
                    enable: true,
                    default: 'zh-CN',
                },
                routes: {
                    exclude: [
                        /models\//,
                        /services\//,
                        /model\.(t|j)sx?$/,
                        /service\.(t|j)sx?$/,
                        /components\//,
                    ],
                },
            },
        ],
    ],
    theme: path.resolve(__dirname, './theme.js'),
};

export default config;
