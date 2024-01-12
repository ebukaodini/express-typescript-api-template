module.exports = {
  // These settings are duplicated in .editorconfig:
  tabWidth: 2, // indent_size = 2
  useTabs: false, // indent_style = space
  endOfLine: "lf", // end_of_line = lf
  semi: true, // default: true
  singleQuote: false, // default: false
  printWidth: 80, // default: 80
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",
  singleAttributePerLine: true,
  overrides: [
    {
      files: "*.{ts,js}",
      options: {
        parser: "typescript",
      },
    },
  ],
};
