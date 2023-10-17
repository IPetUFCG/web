import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "2rem",
      base: "2rem",
      xl: "2rem",
      "2xl": "2rem",
      "3xl": "2rem",
      "4xl": "2rem",
      "5xl": "2rem",
    },
    extend: {
      colors: {
        black: "#000000",
        gray: {
          1: "#F2F2F2",
          2: "#BBBBBB",
        },
        white: "#FFFFFF",
        orange: "#FFA23B",
        orange_pink: "#F68253",
        pink: "#E84DA9",
        pink_blue: "#DE48FD",
        blue: "#636FFF",
        blue_green: "#5CC8FD",
        green: "#4DE8AF",
        green_yellow: "#99FE96",
        yellow: "#ECFF55",
      },
    },
  },
  plugins: [],
};
export default config;
