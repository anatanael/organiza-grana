import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // REGRAS GERAIS DO PROJETO
  {
    plugins: {
      import: importPlugin,
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

  // ✔ OVERRIDE ESPECÍFICO PARA SHADCN UI
  {
    files: ["components/ui/**/*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/jsx-props-no-spreading": "off",
      "import/order": "off",
      "prettier/prettier": "off",
    },
  },

  prettierConfig,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
