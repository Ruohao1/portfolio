import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:  {
        black: "#06080A",
        c1: "#06080A",

        charcoal: "#212121",
        c2: "#212121",
        background: "#212121",

        gunmetal: "#323232",
        c3: "#323232",

        slateblue: "#58748A",
        c4: "#58748A",

        lightslategrey: "#6C95A6",
        c5: "#6C95A6",

        palecyan: "#AED1DC",
        text: "#AED1DC",
        c6: "#AED1DC",

        darkcyan: "#0D7377",
        c7: "#0D7377",

        electriccyan: "#14FFEC",
        cursor: "#14FFEC",
        c8: "#14FFEC",
      }
    },
    fontFamily: {
      source: ['SourceCodePro', 'mono'],
    },
  },
};
export default config;
