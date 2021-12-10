import { defineConfig } from 'umi';
import routes from './src/route.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{
    name: 'Ant Design',
    locale: true,
  },
  routes: routes,
  fastRefresh: {},
  mfsu: {},
});
