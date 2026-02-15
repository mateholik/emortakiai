module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  // add your custom rules here
  rules: {
    'no-trailing-spaces': 'off',
    indent: 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'vue/multi-word-component-names': 'off'
  },
  ignorePatterns: ['dist/', '.nuxt/', 'node_modules/']
};
