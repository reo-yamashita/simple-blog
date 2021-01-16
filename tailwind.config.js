const colors = require("tailwindcss/colors")

module.exports = {
  purge: false,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
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
      colors: {
        warmgray: colors.warmGray,
        bluegray: colors.blueGray,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        lightblue: colors.lightBlue,
        rose: colors.rose,
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
        article: "var(--color-text-article)",
        "article-accent": "var(--color-text-article-accent)",
        little: "var(--color-text-little-accent)",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      letterSpacing: {
        extrawide: "0.18em",
      },
      typography: {
        lg: {
          css: {
            h1: {
              fontSize: "2.5rem",
            },
          },
        },
        DEFAULT: {
          css: {
            color: "var(--color-text-article)",
            a: {
              color: "var(--color-text-article)",
              "&:hover": {
                color: "var(--color-text-accent)",
              },
            },
            h1: {
              color: "var(--color-text-secondary)",
            },
            h2: {
              color: "var(--color-text-article-accent)",
            },
            h3: {
              color: "var(--color-text-article-accent)",
            },
            h4: {
              color: "var(--color-text-article-accent)",
            },
            blockquote: {
              color: "var(--color-text-article)",
            },
            strong: {
              color: "var(--color-text-article)",
            },
            blockquote: {
              borderLeftWidth: "0.25rem",
              borderLeftColor: "var(--color-text-accent)",
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
            code: {
              color: "var(--color-text-article)",
              fontWeight: "500",
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
          },
        },
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
