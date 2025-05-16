import { FlatCompat } from "@eslint/eslintrc";
import tailwind from "eslint-plugin-tailwindcss";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    ...compat.config({
      extends: ['next/core-web-vitals', 'next/typescript'],
    }),
  ]

export default [...tailwind.configs["flat/recommended"], ...eslintConfig];
