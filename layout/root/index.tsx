"use client";
import { Provider } from "react-redux";
import React from "react";
import { store } from "@/store/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
        <Toaster />
      </Provider>
    </>
  );
};

export default Layout;
