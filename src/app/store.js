import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import createFilter from "redux-persist-transform-filter";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//saveUseronlyFilter
const saveUserOnlyFilter = createFilter("user", ["user"]);

//persist config
const persistConfig = {
  key: "User",
  storage,
  whitelist: ["user"],
  transforms: [saveUserOnlyFilter],
};

const rootReducer = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);
