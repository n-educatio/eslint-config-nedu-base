module.exports = {
  extends: 'eslint-config-airbnb-base',

  rules: {
    /**
     * require or disallow space before function opening parenthesis
     * https://eslint.org/docs/rules/space-before-function-paren
     */
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never',
      },
    ],

    /**
     * disallow certain syntax forms
     * https://eslint.org/docs/rules/no-restricted-syntax
     */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    /**
     * disallow warning comments
     * https://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': [
      1,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start',
      },
    ],
  },
};
