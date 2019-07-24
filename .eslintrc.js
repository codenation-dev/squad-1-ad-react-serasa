module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['react-app', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'jsx-a11y', 'react'],
  rules: {
    //padrao do airbnb
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
  },
};
