module.exports = {
  'env': {
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [],
  'rules': {
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'camelcase': 'error',
    'class-methods-use-this': 'error',
    'comma-dangle': 'error',
    'complexity': ['error', 10],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'jsx-quotes': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': ['error', 1],
    'max-depth': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-use-before-define': ['error', { functions: true, classes: true }],
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-destructuring': 'error',
    'yoda': 'error'
  },
};
