/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./layout/**/*.{ts,tsx,js,jsx}",
    "./slices/**/*.{ts,tsx,js,jsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: {
        DEFAULT: "#5CBB47",
        50: "#D3EDCD",
        100: "#C6E7BE",
        200: "#ABDCA0",
        300: "#91D183",
        400: "#76C665",
        500: "#5CBB47",
        600: "#479336",
        700: "#336A27",
        800: "#204118",
        900: "#0C1909",
      },
      secondary: {
        DEFAULT: "#295057",
        50: "#78B5BF",
        100: "#6AADB9",
        200: "#509CAA",
        300: "#43838E",
        400: "#366973",
        500: "#295057",
        600: "#172D31",
        700: "#050A0B",
        800: "#000000",
        900: "#000000",
      },
      gray: colors.coolGray,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["var(--inter-font)", ...fontFamily.sans],
      serif: ["var(--inter-font)", ...fontFamily.serif],
      khula: ["var(--khula-font)", ...fontFamily.sans]
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
