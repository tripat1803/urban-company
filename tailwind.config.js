const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        "primary": "rgba(15,15,15,1.00)",
        "secondary": "rgb(110,66,229)"
      },
      backgroundColor: {
        "primary": "rgba(15,15,15,1.00)",
        "secondary": "rgb(110,66,229)"
      },
      borderColor: {
        "secondary": "rgb(110,66,229)"
      }
    },
  },
  plugins: [nextui()],
};
