import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextConfig from "eslint-config-next";

const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextConfig,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default config;
