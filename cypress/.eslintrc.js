module.exports = {
  root: true,
  extends: [
    'plugin:cypress/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  env: { 'cypress/globals': true },
  rules: {
    '@typescript-eslint/no-namespace': 'off',
  },
};
