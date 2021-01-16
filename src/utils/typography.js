import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Inter",
      styles: ["300", "400", "500", "600", "700", "800", "900"],
    },
  ],
  bodyFontFamily: ["Inter"],
})

export default typography
