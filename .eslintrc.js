module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['react', 'react-native'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['warning', 'windows', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-var': ['error'],
    eqeqeq: ['error'],
    'react/prop-types': 0,
    'react-native/no-raw-text': 0,
    'react/no-string-refs': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  globals: {
    fetch: true,
  },
};
