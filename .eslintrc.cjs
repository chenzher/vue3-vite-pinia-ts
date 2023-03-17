module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint-config-prettier',
    'eslint:recommended', //eslint的建议规则
    'plugin:vue/vue3-essential', //https://eslint.vuejs.org/user-guide/
    'plugin:@typescript-eslint/eslint-recommended', //插件@typescript-eslint的建议规则
    'plugin:@typescript-eslint/recommended', //插件@typescript-eslint的建议规则
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    complexity: ['error', 6],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'prettier/prettier': 'error',
  },
};
