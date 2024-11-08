import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expenseSlice";
import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const store = configureStore({
//   reducer: {
//     EXPENSE: expenseSlice.reducer,
//   },
// });

const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

// 리덕스가 로컬스토리지를 이용하기 위한 초기설정
const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistedStore = persistStore(store);

export { store, persistedStore };
