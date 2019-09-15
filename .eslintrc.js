module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "react-app",
    "plugin:react/recommended" // Uses the recommended rules from @eslint-plugin-react
  ],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified
    // from the extended configs.
    // If you add anything here, justify why.

    "react/prop-types": 0 // not external facing library, so not needed for TypeScript
  }
};
