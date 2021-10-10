const stylelintConfig = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-max-empty-lines': 1,
  },
};

module.exports = stylelintConfig;
