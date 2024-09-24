import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        c: {
          '100': '#000000',
          '200': '#1A1A1A',
          '300': '#333333',
          '400': '#4D4D4D',
          '500': '#666666',
          'code': '#fff',
        },
      },
    },
  },
  plugins: [],
};
export default config;
