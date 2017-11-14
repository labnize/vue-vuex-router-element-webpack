module.exports = {
  // parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  // extends: ['airbnb-base'],
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  plugins: [
    'vue'
  ],
  rules: {
    quotes: [2, 'single'],
    semi: 2,
    'max-len': [1, 120, 2],
    'arrow-body-style': [1, 'as-needed'],
    'comma-dangle': [2, 'never'],
    'no-debugger': 2,
    'no-console': 2,
    'object-curly-spacing': [2, 'always'],
    'no-undef': [1],
    'new-cap': 1,
    'no-param-reassign': 2,
    'global-require': 0,
    'no-mixed-operators': 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0
  }
};