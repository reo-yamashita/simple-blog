const getInitialTheme = () => {
  if (typeof window !== `undefined`) {
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")

    if (userMedia.matches) {
      return "dark" //"dark"
    }
  }
  return "light" //"light"
}

const initialState = { themeColor: getInitialTheme() }

console.log(initialState)
export const themeReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_THEMECOLOR") {
    return {
      ...state,
      themeColor: action.themeColor,
    }
  }
  return state
}

export const themeColorToggle = (theme) => {
  const root = window.document.documentElement
  const isDark = theme === "dark"

  root.classList.remove(isDark ? "light" : "dark")
  root.classList.add(theme)

  return {
    type: "TOGGLE_THEMECOLOR",
    themeColor: theme,
  }
}
