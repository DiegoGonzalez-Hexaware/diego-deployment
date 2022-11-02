module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "linebreak-style": 0,
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/order": "off",
    "import/prefer-default-export": "off",
    "comma-dangle": "off",
    camelcase: "off",
  },
};
