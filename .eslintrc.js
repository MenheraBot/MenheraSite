module.exports = {
  extends: ['eslint:recommended', 'next/core-web-vitals', 'next', 'prettier'],
  root: true,
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
