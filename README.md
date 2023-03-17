# 注意

## 环境变量配置

```js
#以下不可删除
VITE_ENV = production; // 标记当前环境，用于隔离不同环境的代码
```

## crlf

使用 `npm run lint` 可以批量解决 delete cr 错误: error  Delete `⏎`

## global.d.ts

解决加载图片 样式的无法找到模块的 bug

## 规范

1.类型定义统一以‘ I ’开头，例如 interface IGetListApi = {...} <br> 2.封装组件统一大写字母开头，例如 Header.vue , Layout.vue <br>

## 调试

1.npm serve 打开页面 http://localhost:5173/index/#/home 或多页时的 http://localhost:5173/page2/#/home