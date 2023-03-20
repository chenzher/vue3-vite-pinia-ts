/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __APP_VERSION__: string;
declare const __APP_ENV: string;
