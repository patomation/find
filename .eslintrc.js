module.exports = {
    extends: 'standard-with-typescript',
    env: {
      mocha: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'project': './tsconfig.json'
    },
    plugins: [
      'mocha',
      'chai',
      // '@typescript-eslint'
    ],
    rules: {
      '@typescript-eslint/no-dynamic-delete': 0 // Need to be able to dynamically delete key value pairs from storage with remove method
    }

};