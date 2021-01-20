const initialState = {
  details: {
    name: "",
    email: "",
    content: "",
  },
  isSaved: false,
  isSubmitted: false,
}

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DETAILS":
      console.log(`Contact form is now Saved.`)
      return {
        ...state,
        details: action.details,
        isSaved: action.isSaved,
      }
    case "SUBMIT_DETAILS":
      console.log(`Contact form is now Submitted.`)
      return {
        ...state,
        details: action.details,
        isSubmitted: action.isSubmitted,
      }
    default:
      return state
  }
}

export const onSave = (details) => {
  return (dispatch) => {
    dispatch({
      type: "SAVE_DETAILS",
      details,
      isSaved: true,
    })

    setTimeout(() => {
      dispatch({
        type: "SAVE_DETAILS",
        details,
        isSaved: false,
      })
    }, 5000)
  }
}

export const onSumbit = () => {
  return (dispatch) => {
    dispatch({
      type: "SUBMIT_DETAILS",
      details: {
        name: "",
        email: "",
        content: "",
      },
      isSubmitted: true,
    })

    setTimeout(() => {
      dispatch({
        type: "SUBMIT_DETAILS",
        details: {
          name: "",
          email: "",
          content: "",
        },
        isSubmitted: false,
      })
    }, 5000)
  }
}
