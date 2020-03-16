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
  theme,
});
