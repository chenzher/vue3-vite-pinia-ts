import {
  envConfig,
  staticUrl,
  isFile,
  needVconsole,
  enableVantManualChunks,
  enableLodashManualChunks,
} from './config';
import glob from 'glob';

export type IEnv =
  | 'stable'
  | 'dev'
  | 'ctest'
  | 'pre'
  | 'production'
  | 'development';

export const getEnvConfig = (viteEnv: IEnv) => {
  return envConfig[viteEnv as IEnv];
};

// 设置base
export const getBase = (viteEnv: IEnv) => {
  return viteEnv === 'development'
    ? '/'
    : getEnvConfig(viteEnv).domainUrl + staticUrl;
};

interface IPageConfig {
  entry: string; //入口文件
  filename: string; //指定打包输出的index.html路径
  template: string; //模版页面
}
interface IPages {
  [key: string]: IPageConfig;
}
const getMulu = function (filePath: string) {
  const filename1 = filePath.substring(0, filePath.lastIndexOf('/'));
  const filename2 = filename1.substring(filename1.lastIndexOf('/') + 1);
  return filename2;
};
// 多页配置
export const getPages = (viteEnv: IEnv) => {
  const pages: IPages = {};
  const entryFiles = glob.sync('src/view/*/main.ts');
  console.log('entryFiles===', entryFiles);
  entryFiles.forEach((filePath: string) => {
    const filename = getMulu(filePath);
    console.log('filename===', filename);
    if (filename) {
      const config = getEnvConfig(viteEnv);
      pages[filename] = {
        entry: `${filename}/main.ts`, //入口文件
        filename: isFile
          ? `/${config.indexPath}/${filename}/index.html`
          : `/${config.indexPath}/${filename}.html`, //指定打包输出的index.html路径
        template: `${filename}/index.html`, //模版页面
      };
    }
  });
  console.log('pages===', pages);
  return pages;
};

interface IManualChunks {
  [key: string]: string[];
}
export const getManualChunks = (viteEnv: IEnv) => {
  const manualChunks: IManualChunks = {};
  if (enableVantManualChunks) {
    manualChunks.vant = ['vant'];
  }
  if (enableLodashManualChunks) {
    manualChunks.lodash = ['lodash-es'];
  }
  if (needVconsole && viteEnv !== 'production') {
    manualChunks.vconsole = ['vconsole'];
  }
  return manualChunks;
};
