var merge = require('../');

const a = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'node'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-vars': [2],
  },
};

const b = {
  plugins: [true],
  rules: { a: 1 },
};

const res = merge({}, a, b);

console.assert(
  Object.keys(res.rules).length === 3,
  JSON.stringify(res.rules, 0, 2)
);
