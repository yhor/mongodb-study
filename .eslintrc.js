module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // eslint-disable-next-line prettier/prettier
  plugins: [
    'prettier',
    '@typescript-eslint',
  ],
  rules: {
    'lines-between-class-members': 'off',
    'no-var-requires': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'error',
    'no-unexpected-multiline': 'error',
    'no-extra-semi': 'error',
    'linebreak-style': 0,
    'linebreak-style2': 0,
    camelcase: [0],
    '@typescript-eslint/camelcase': ['off'],
    'import/extensions': 0,
    'no-restricted-syntax': 0,
    'no-nested-ternary': 0,
    'no-continue': 0,
    'no-await-in-loop': 0,
    'no-useless-escape': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extension: ['.ts'],
      },
    },
  },
  ignorePatterns: ['./src/models/model'],
};