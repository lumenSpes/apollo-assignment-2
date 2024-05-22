import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    languageOptions: { 
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "no-undef": "error",
      "no-console": "warn",
      "prefer-const": "warn",
    },
    ignores: ["**/node_modules/", ".dist/"],
    
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];