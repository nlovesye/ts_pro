import { defineConfig } from 'umi';
import { routes } from './router';
import theme from './theme';

export default defineConfig({
  routes,
  hash: true,
  locale: {
    antd: true,
  },
  dva: {
    immer: true,
  },
  request: {
    dataField: 'data',
  },
  proxy: {
    '/api': {
      target: 'https://sscm.smartcomma.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
  theme,
  // dynamicImport: {
  //   // 无需 level, webpackChunkName 配置
  //   // loadingComponent: './components/PageLoading/index'
  //   loading: '@/components/PageLoading/index',
  // },
});
