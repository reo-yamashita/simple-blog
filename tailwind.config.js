const colors = require("tailwindcss/colors")

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      orange: colors.orange,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
