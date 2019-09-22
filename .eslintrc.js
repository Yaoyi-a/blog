/*
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: eslint配置文件
 * @Date: 2019-02-26 23:43:23
 * @LastEditTime: 2019-09-16 00:33:12
 */

module.exports = {
  // 阻止eslint读取父目录或总配置文件的规则
  root: true,

  /** 代码环境 */
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },

  /** 所使用的规则配置 */
  extends: ['eslint:recommended'],

  /** 自定义的额外规则 */
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': ['error', { multiline: true }],
    'array-bracket-spacing': 'warn',
    'array-callback-return': 'error',
    'array-element-newline': ['error', 'consistent'],
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'callback-return': 'error',
    camelcase: 'error',
    'capitalized-comments': 'error',

    // 因为vue的原因此项需要设置off
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    complexity: ['warn', { max: 25 }],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'consistent-this': 'error',
    curly: ['error', 'multi'],
    'default-case': 'warn',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'error',
    'function-paren-newline': 'error',
    'generator-star-spacing': 'error',
    'global-require': 'off',
    'guard-for-in': 'warn',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    // 'implicit-arrow-linebreak': ['error', 'beside'],
    // 防止因为自动换行造成的报错
    'implicit-arrow-linebreak': ['off', 'beside'],
    indent: 'off',
    'init-declarations': 'off',
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'error',
    'max-depth': 'error',
    'max-len': [
      'error',
      {
        code: 120, ignoreComments: true, ignoreStrings: true, ignoreUrls: true,
        tabWidth: 2, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true
      }
    ],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'error',
    'max-params': ['error', { max: 5 }],
    'max-statements': 'off',
    'max-statements-per-line': 'error',
    'multiline-comment-style': 'warn',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-alert': 'warn',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    // 简化代码，忽略迷惑的箭头函数提示
    'no-confusing-arrow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-continue': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['&&', '||']
        ]
      }
    ],
    'no-mixed-requires': 'error',
    'no-multi-assign': 'off',
    'no-multi-spaces': [
      'error',
      { ignoreEOLComments: true }
    ],
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-useless-escape': 'off',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'off',
    'no-shadow': ['error', { hoist: 'all' }],
    'no-shadow-restricted-names': 'error',
    'no-sync': 'off',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme'],
        location: 'start'
      }
    ],
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': ['error', 'any'
    ],
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { multiline: true, minProperties: 3 },
        ImportDeclaration: { multiline: true, minProperties: 5 },
        ObjectExpression: { multiline: true },
        ObjectPattern: { multiline: true }
      }
    ],
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'padded-blocks': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['off', { object: true, array: false }],
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    quotes: ['warn', 'single'],
    radix: ['error', 'as-needed'],
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'rest-spread-spacing': 'error',
    semi: 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    // 禁止无用排序
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',

    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    strict: 'error',
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': 'error',
    'unicode-bom': ['error', 'never'],
    'vars-on-top': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    yoda: ['error', 'never']
  }
};
