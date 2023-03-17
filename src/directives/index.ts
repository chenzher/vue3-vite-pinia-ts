import type { App } from 'vue';
import { setupTestDirective } from './testDirective';

export const setupGlobDirectives = (app: App): void => {
  setupTestDirective(app);
};
