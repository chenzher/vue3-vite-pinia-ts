import type { Directive, App } from 'vue';

const testDirective: Directive = {
  mounted(el: any, binding: any) {
    console.log('el===', el, binding);
  },
  unmounted(el: any, binding: any) {
    console.log('el===', el, binding);
  },
};

export const setupTestDirective = (app: App): void => {
  app.directive('testDirective', testDirective);
};
