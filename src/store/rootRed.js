import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { writerReducer } from "./writerRed"
import { themeReducer } from "./themeRed.js"
import { contactReducer } from "./contactRed"

const themePersistConfig = {
  key: "theme_firstRender",
  storage: storage,
  blacklist: ["isFirstRendered"],
}

const rootRed = combineReducers({
  writerReducer,
  themeReducer: persistReducer(themePersistConfig, themeReducer),
  contactReducer,
})

export default rootRed
