import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import eslint from "@eslint/js";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import importX from "eslint-plugin-import-x";

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: importX,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    rules: {
      "no-unused-vars": "warn",
      "no-multiple-empty-lines": ["error", { max: 1 }],

      "import/newline-after-import": "error",

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],

          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],

          pathGroupsExcludedImportTypes: ["react"],

          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  prettierConfig,

  globalIgnores(["dist/**", "build/**", "node_modules/**"]),
]);
