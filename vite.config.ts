import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {
  ElementPlusResolver,
  VantResolver,
} from 'unplugin-vue-components/resolvers';
import postcssPxtorem from 'postcss-pxtorem';
import postcssPresetEnv from 'postcss-preset-env';
import legacy from '@vitejs/plugin-legacy';
import eslintPlugin from 'vite-plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';
import mpaPlugin from 'vite-plugin-mpa-plus';
import { server, globalSass, px2rem } from './build/config';
import { getPages, getBase, getManualChunks } from './build/tool';
import type { IEnv } from './build/tool';

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd());
  console.log('env===', env);

  const plugins = [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), VantResolver()],
      directoryAsNamespace: true,
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.ts'],
    }),
    // 多页配置
    mpaPlugin({
      pages: getPages(env.VITE_ENV as IEnv),
    }),
  ];
  // 打包分析
  if (env.VITE_ENV !== 'development') {
    plugins.push(
      visualizer({
        open: false, //浏览器打开stats.html可手动查看
        gzipSize: true,
        brotliSize: true,
      })
    );
  }

  return {
    base: getBase(env.VITE_ENV as IEnv),
    plugins,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: globalSass,
        },
      },
      postcss: {
        plugins: [
          postcssPresetEnv(), //自动预设兼容性前缀
          postcssPxtorem(px2rem),
        ],
      },
    },
    // 配置路径别名
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    root: 'src/view', //项目根路径
    publicDir: '../../public', //相对于项目根路径root设置
    // 构建
    build: {
      outDir: '../../dist', //相对于项目根路径root设置
      assetsDir: 'assets',
      assetsInlineLimit: 10240, //小于10Kb的资源内联为base64编码
      // target: ['esnext'], //已被legacy插件覆盖
      rollupOptions: {
        output: {
          manualChunks: getManualChunks(env.VITE_ENV as IEnv),
        },
      },
    },
    //预构建优化
    optimizeDeps: {
      include: ['lodash-es', 'vant', 'element-plus'],
    },
    //代理
    server,
  };
});
