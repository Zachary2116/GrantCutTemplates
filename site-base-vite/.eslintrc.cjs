module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  settings: { react: { version: 'detect' } },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  }
};
