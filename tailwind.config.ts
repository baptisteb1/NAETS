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
        naets: {
          black: "#000000",
          white: "#FFFFFF",
          "off-white": "#F5F5F2",
          "light-gray": "#E5E5E0",
          "mid-gray": "#BDBDB7",
          "dark-gray": "#707070",
          "near-black": "#111111",
        },
      },
      fontFamily: {
        condensed: ["var(--font-bebas)", "Oswald", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        "widest-2": "0.2em",
        "widest-3": "0.3em",
      },
      gridTemplateColumns: {
        "mega": "1fr 1fr 1fr 1fr",
        "footer": "2fr 1fr 1fr 1fr 1fr",
      },
      transitionTimingFunction: {
        "naets": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      screens: {
        "xs": "375px",
      },
    },
  },
  plugins: [],
};

export default config;
