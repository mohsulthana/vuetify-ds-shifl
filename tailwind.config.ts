/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: {
            100: "#175878",
            90: "#1A6D9E",
            80: "#1A86BC",
            70: "#0E9FDD",
            60: "#2AB7F4",
            50: "#6CCAF9",
            40: "#A6DDFC",
            30: "#C3E8FE",
            20: "#E1F4FF",
            10: "#F0F9FF",
          },
        },
        neutral: {
          n: {
            100: "#121B2B",
            90: "#253041",
            80: "#3D485C",
            70: "#4B586C",
            60: "#69758C",
            50: "#9CA5B4",
            40: "#D0D5DD",
            30: "#E7E9EE",
            20: "#F3F4F7",
            10: "#F9FAFB",
          },
          white: "rgb(255, 255, 255, 100)",
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        "4xl": "5rem",
      },
      lineHeight: {
        "4xl": "72px",
      },
      letterSpacing: {
        "minus-2": "-2px",
      },
    },
  },
  plugins: [],
};
