/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/eslint-config-prettier'],
  rules: {
    'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
