module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals'
  ],
  rules: {
    'semi': ['error', 'always'],
    'prettier/prettier': "off",
    'jsx-a11y/click-events-have-key-events': "off",
    'jsx-a11y/no-static-element-interactions': "off",
    'jsx-a11y/no-noninteractive-element-interactions': "off",
    '@next/next/no-img-element':"off",
    'react/display-name':"off",
    'no-unused-vars': 'warning',
  }
};
