const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-essential",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    "no-console": NODE_ENV === "production" ? 2 : 1,
    "no-debugger": NODE_ENV === "production" ? 2 : 1,
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "vue/multi-word-component-names": "off"
  }
};
