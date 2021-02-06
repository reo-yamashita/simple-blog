const getInitialTheme = () => {
  if (typeof window !== `undefined`) {
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")

    if (userMedia.matches) {
      return ["dark", "light"]
    }
  }
  return ["light", "dark"]
}

const initialState = {
  themeColor: getInitialTheme(),
  isFirstRendered: false,
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEMECOLOR":
      console.log(`Current Theme is ${action.themeColor[0]} !!`)
      return {
        ...state,
        themeColor: action.themeColor,
      }
    case "TOGGLE_FIRSTRENDER":
      console.log(`FirstRender is Done...`)
      return {
        ...state,
        isFirstRendered: action.isFirstRender,
      }
    default:
      return state
  }
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

export const firstrenderToggle = (isFirstRender) => {
  return {
    type: "TOGGLE_FIRSTRENDER",
    isFirstRender,
  }
}
