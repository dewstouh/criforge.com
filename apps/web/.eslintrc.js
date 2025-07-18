/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@criforge/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
