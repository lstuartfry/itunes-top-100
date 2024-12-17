import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   colors: {
    //     // current iTunes logo color scheme - https://1000logos.net/itunes-logo/
    //     main: "#4d9df9",
    //     secondary: "#f75d6d",
    //     accent: "#8264ff",
    //   },
    // },
    extend: {},
  },
} satisfies Config;
