import { combineReducers } from "redux"
import { writerReducer } from "./writerRed"
import { themeReducer } from "./themeRed.js"

const rootRed = combineReducers({
  writerReducer,
  themeReducer,
})

export default rootRed
