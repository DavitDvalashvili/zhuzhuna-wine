/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arialgeo: ['"Arial GEO"', "sans-serif"],
        tommaso: ['"ALK Tommaso"', "sans-serif"],
      },
      colors: {
        backgroundColor: {
          purpleStart: "#A583D1",
          purpleMid: "#724AA4",
          purpleEnd: "#1E122E",
          backgroundCol: "#F5F5F5",
          backgroundSecondary: "#373b53",

          dark: {
            backgroundCol: "#000",
          },
        },

        color: {
          primary: "#FFF",
          secondary: "#aea6b7",
          black: "#000",
          gray: "#848282",

          dark: {
            black: "#fff",
          },
        },

        buttonColor: {
          primary: "#613994",
          secondary: "#000",

          dark: {
            primary: "#724AA4",
            secondary: "#fff",
          },
        },

        inputColor: {
          primary: "#000",
          secondary: "#D0CFCF",

          dark: {
            primary: "#fff",
            secondary: "#000",
          },
        },
      },
      screens: {
        xl: "1440px",
        xs: "425px",
      },
      mixBlendMode: {
        difference: "difference",
      },
    },
  },
  plugins: [],
};
