// @ts-check
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  ...tseslint.configs.recommended,
  {
    files: ["test/**/*.ts"],
    rules: {
      // Chai assertions trigger the no-unused-expressions rule
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
);
