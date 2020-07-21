module.exports = {
  root: true,
  env: { browser: true, node: true },
  parserOptions: { parser: 'babel-eslint' },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  rules: {
    'semi': [2, 'always'],
    'arrow-parens': 0,
    'spaced-comment': 0,
    'camelcase': 0,
    'space-before-function-paren': 1,
    'eol-last': 0,
    'no-return-assign': 0,
    'no-trailing-spaces': 0,
    'curly': [1, 'multi'],
    'object-curly-spacing': 0,
    'comma-dangle': [
      'warn',
      { objects: 'always-multiline', arrays: 'always-multiline', }
    ],
    'indent': 0,
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      }
    ],
    'vue/script-indent': [
      'error',
      2,
      { baseIndent: 1 }
    ],
    'vue/require-default-prop': 0,
    'vue/require-v-for-key': ['error'],
    'vue/singleline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/no-v-html': 0,
    'vue/no-unused-components': ['warn'],
    'vue/prop-name-casing': 0,
    'no-unused-vars': ['warn'],
  }
}
