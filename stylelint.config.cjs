module.exports = {
  extends: [
    'stylelint-config-standard-scss', // extends ["stylelint-config-standard", "stylelint-config-recommended-scss"]
    'stylelint-config-html',
    'stylelint-config-standard-vue', // extends ["stylelint-config-standard", "stylelint-config-recommended-vue"]
    'stylelint-config-standard-vue/scss',
    'stylelint-config-prettier-scss', // extends "stylelint-config-prettier"
  ],
  overrides: [
    {
      "files": ["*.html", "**/*.html"],
      "customSyntax": "postcss-html",
    },
    {
      "files": ["*.md", "**/*.md"],
      "customSyntax": "postcss-markdown",
    },
  ],
  rules: {
    'no-empty-source': null,
    'font-family-no-missing-generic-family-keyword': null,
    'block-no-empty': null,
    'no-descending-specificity': null,
    'color-hex-length': 'long',
    'at-rule-no-unknown': null,
    'value-keyword-case': null,
    'selector-class-pattern': null,
    'rule-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'color-function-notation': 'legacy',
  },
}
