module.exports = {
  "extends": "standard",
  "installedESLint": true,
  "plugins": [
  "standard",
  "promise"
  ],
  'rules': {
    // enforce 2 spaces for indentation
    "indent": ["error", 2],
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': (process.env.NODE_ENV === 'production' ? 'error' : 'off'),
    // require semicolons
    'semi': [ 'error', 'always' ],
    // require trailing commas
    'comma-dangle': ['error', 'always-multiline'],
    // require space before function paren, only for anonymous and arrow methods
    'space-before-function-paren': [ "error", {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'} ],
    // put linebreak before the operator
    'operator-linebreak': ["error", "before"]
  }
};
