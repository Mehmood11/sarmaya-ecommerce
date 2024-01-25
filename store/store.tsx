import { ProductSlice } from "./product-slice/product-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import type { AnyAction } from "@reduxjs/toolkit";
import type { ThunkAction } from "redux-thunk";
import { enableDevTools } from "@/config";
import type { TypedUseSelectorHook } from "react-redux";
import { baseApi } from "@/services/base-api";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  version: 1,
  whitelist: ["product"],
  storage,
};

const appReducer = combineReducers({
  product: ProductSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: enableDevTools as boolean,
  middleware: (defaultMiddleware: any) =>
    defaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = (): any => useReduxDispatch<AppDispatch>();
