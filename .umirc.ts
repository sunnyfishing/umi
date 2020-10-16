// 改文件主要用来配置umi内置功能和插件
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{},  // 配置ant-design-pro布局
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
