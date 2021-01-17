import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { writerReducer } from "./writerRed"
import { themeReducer } from "./themeRed.js"

const themePersistConfig = {
  key: "theme_firstRender",
  storage: storage,
  blacklist: ["isFirstRendered"],
}

const rootRed = combineReducers({
  writerReducer,
  themeReducer: persistReducer(themePersistConfig, themeReducer),
})

export default rootRed
