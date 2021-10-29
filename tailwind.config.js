module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: "#000",
      white: "#FFF",
      red: {
        100: "#FFE6E2",
        "100-transparent-15": "rgba(255, 87, 62, 0.15)",
        500: "#FF644C",
        600: "#D14833",
      },
      yellow: {
        50: "#FFF7E8",
        "50-transparent-15": "rgba(255, 201, 98, 0.15)",
        300: "#FFC962",
        400: "#E3B45A",
      },
      green: {
        50: "#E4FDF0",
        "50-transparent-15": "rgba(76, 242, 155, 0.15)",
        300: "#4CF29B",
        500: "#37C77B",
      },
      blue: {
        50: "#EBF1FE",
        "50-transparent-10": "rgba(46, 108, 244, 0.1)",
        "50-transparent-6": "rgba(46, 108, 244, 0.06)",
        500: "#2E6CF4",
        700: "#255BD0",
      },
      grey: {
        50: "#F6F6F6",
        650: "#3B3D44",
        700: "#30333A",
        "700-opaque-5": "#F5F5F6",
        "700-opaque-10": "#EAEAEB",
        "700-opaque-20": "#D6D7D8",
        "700-opaque-40": "#ACADB0",
        "700-opaque-60": "#838589",
      },
      "grey.default.o5": "rgba(48, 51, 58, 0.05)",
      "grey.default.o10": "rgba(48, 51, 58, 0.1)",
      "grey.default.o15": "rgba(48, 51, 58, 0.15)",
      "grey.default.o20": "rgba(48, 51, 58, 0.2)",
      "grey.default.o30": "rgba(48, 51, 58, 0.3)",
      "grey.default.o40": "rgba(48, 51, 58, 0.4)",
      "grey.default.o60": "rgba(48, 51, 58, 0.6)",
      "grey.default.o70": "rgba(48, 51, 58, 0.7)",
      "grey.default.o80": "rgba(48, 51, 58, 0.8)",
      "grey.default.o100": "rgb(48, 51, 58)",
    },
  },
  variants: {
    extend: {
      animation: {
        gradient: "gradient-bg 2s linear infinite forwards",
      },
      keyframes: (theme) => ({
        "gradient-bg": {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          },
        },
      }),
    },
  },
  plugins: [],
};
