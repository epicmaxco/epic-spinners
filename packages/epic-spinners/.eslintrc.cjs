module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // parser to parse <script> tags in .vue files
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:json/recommended',
    'plugin:vue/vue3-recommended', // extends "plugin:vue/vue3-strongly-recommended", "plugin:vue/vue3-essential"
    '@vue/typescript/recommended', // extends "plugin:@typescript-eslint/recommended"
    '@vue/eslint-config-prettier', // extends "plugin:prettier/recommended"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'all'],
    indent: ['error', 2, { ignoreComments: true, SwitchCase: 1 }],
    'lines-between-class-members': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'no-void': 'off',
    'id-match': ['error', '^[A-Za-z0-9-_$]+$', { properties: true }], // To prevent cyrillic letters etc.

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // allow explicit any's because of the legacy code and ts-less deps, but still prohibit implicit any's
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'vue/multi-word-component-names': 0,
    'vue/no-lone-template': 0,
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-multiple-template-root': 'off',
  },
}
