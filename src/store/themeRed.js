const getInitialTheme = () => {
  if (typeof window !== `undefined`) {
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")

    if (userMedia.matches) {
      return ["dark", "light"]
    }
  }
  return ["light", "dark"]
}

const initialState = { themeColor: getInitialTheme() }

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

  root.classList.remove(theme[1])
  root.classList.add(theme[0])

  return {
    type: "TOGGLE_THEMECOLOR",
    themeColor: theme,
  }
}
