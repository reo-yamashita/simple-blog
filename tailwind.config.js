const colors = require("tailwindcss/colors")

module.exports = {
  purge: false,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        warmgray: colors.warmGray,
        bluegray: colors.blueGray,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        lightblue: colors.lightBlue,
        rose: colors.rose,
      },
      fontFamily: {
        sans: [
          "Inter",
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
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        accent: "var(--color-bg-accent)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
