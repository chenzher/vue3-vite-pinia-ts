export type IEnv =
  | 'stable'
  | 'dev'
  | 'ctest'
  | 'pre'
  | 'production'
  | 'development';

export const staticUrl = '/static/tcy365-data/m/';

export const envConfig = {
  development: {
    domainUrl: '',
    indexPath: '',
  },
  stable: {
    domainUrl: '//static.tcy365.org:1505',
    indexPath: '1505-stable',
  },
  dev: {
    domainUrl: '//static.tcy365.org:1506',
    indexPath: '1506-develop',
  },
  ctest: {
    domainUrl: '//static.tcy365.org:1507',
    indexPath: '1507-test',
  },
  pre: {
    domainUrl: '//prestatic.tcy365.com',
    indexPath: '2505-pre',
  },
  production: {
    domainUrl: '//static.tcy365.com',
    indexPath: '80-static',
  },
};

export const px2rem = {
  //rem换算
  rootValue: 100,
  selectorBlackList: ['van-'], // 忽略转换正则匹配项 ['van-']
  propList: ['*'],
};

export const globalSass = '@import "@/assets/css/variables.scss";';

export const isFile = false; //是否使用文件夹作为html文件的名字比如page1.html

export const needVconsole = false; //是否需要vconsole

export const server = {
  open: '/index/#/home',
  // open: '/page2/#/home',//多页面开发
  proxy: {
    '/api': {
      target: 'https://data.tcy365.org:1441',
      secure: false,
      changeOrigin: true,
      // rewrite: (path) =>
      //   path.replace(/^\/api/, '/api'),
    },
  },
};
