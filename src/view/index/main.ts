import '@/assets/css/reset.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import '@/router/permission';
import pinia from '@/store/index';
import { Http } from 'nat-plus';
import mitt from 'mitt';
import { setupGlobDirectives } from '@/directives/index';
import Vconsole from 'vconsole';
import { needVconsole } from '../../../build/config';

const env = import.meta.env.VITE_ENV;
if (needVconsole && env !== 'production') {
  const vConsole = new Vconsole();
  setTimeout(() => {
    vConsole.setSwitchPosition(0, 100);
  }, 0);
}

const app = createApp(App);
app.config.globalProperties.$mitt = mitt();
setupGlobDirectives(app);

const interceptorSuccess = (res: any) => {
  console.log('interceptorSuccess===', res);
};
const interceptError = (res: any) => {
  console.log('interceptError===', res);
};

app
  .use(Http, {
    interceptorSuccess,
    interceptError,
  })
  .use(pinia)
  .use(router)
  .mount('#app');
