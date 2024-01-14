import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        overlaydark: "#1b1b1b",
        brandDark: "#ffdb4d",
        brand: "#7B00D3",
      },
      gridTemplateColumns: {
        twoIcons: "auto 1fr auto",
      },
      animation: {
        "spin-slow": "spin 9s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
