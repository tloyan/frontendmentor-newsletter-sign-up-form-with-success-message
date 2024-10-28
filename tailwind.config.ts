import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)"
      },
      colors: {
        primary: "hsl(4, 100%, 67%)",
        neutral: {
          1: "hsl(234, 29%, 20%)",
          2: "hsl(235, 18%, 26%)",
          3: "hsl(241, 5%, 78%)",
          4: "hsl(0, 0%, 100%)",
        }
      }
    },
  },
  plugins: [],
};
export default config;
