module.exports = {
  // ...
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: ['next/core-web-vitals', 'prettier'],
}
