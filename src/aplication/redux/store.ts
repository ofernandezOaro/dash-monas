import {
  combineReducers,
  configureStore,
  Reducer,
  Store
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { notificationSlice } from "./slices/snacks";
import { productReducer } from "./product.store.redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"] // only navigation will be persisted
};

const reducers: Reducer = combineReducers({
  snacks: notificationSlice.reducer,
  productReducer: productReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const makeStore = (): Store =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: import.meta.env.VITE_BASE_API_URL !== "production" ? false : true
      }).concat([])
  });

const store = makeStore();

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line import/no-default-export
export default store;
