import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Add some common helpful rules
      "no-console": ["error", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-const": "warn",
      // Add rules specific to Next.js
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
