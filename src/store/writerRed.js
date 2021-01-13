const initialState = { isDone: false }

export const writerReducer = (state = initialState, action) => {
  if (action.type === "WRITE_FOWARD") {
    return {
      ...state,
      isDone: true,
    }
  }
  return state
}
