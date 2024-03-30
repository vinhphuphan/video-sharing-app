import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        secondary : {
          bg : "#f8f8f8", //"rgba(0, 0, 0, 0.05)",
          hover : "#f0f0f0", //"rgba(0, 0, 0, 0.25)",
          blue : "#def1ff",
          border : "#ccc",
        },
        primary : {
          bg : "#fff",
          text : "#0f0f0f",
          blue : "#065fd4",
          border : "#0000001a"
        },

      },
    },
  },
  plugins: [],
};
export default config;
