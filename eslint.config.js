// eslint.config.js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    rules: {
      "no-unused-vars": 1,
      "@typescript-eslint/no-unused-vars": [
        "error", {
          varsIgnorePattern:"^_",
          argsIgnorePattern:"^_"
        }
      ],
    },
  },
]);
