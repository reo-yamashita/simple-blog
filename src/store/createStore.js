import { createStore, applyMiddleware, compose } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
//import storageSession from "redux-persist/lib/storage/session"
import rootReducer from "./rootRed"
const windowGlobal = typeof window !== "undefined" && window
const composeEnhancers =
  windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["themeReducer"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store)

// export const store = createStore(
//   rootReducer,
//   persistedReducer,
//   composeEnhancers()
// )
