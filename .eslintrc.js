module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard',
    
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    '@typescript-eslint',
    
  ],
  rules: {
  }
}
