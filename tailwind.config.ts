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
        custom: {
          DEFAULT: 'oklch(79.2% 0.209 151.711)',
          hover: 'oklch(52.7% 0.154 150.069)',
        },
      },
      fontFamily: {
        vazir: ["Vazir"],
      },
    },
  },
  plugins: [],
};
export default config;
