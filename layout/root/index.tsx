"use client";
import { Provider } from "react-redux";
import React from "react";
import { store } from "@/store/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { usePathname } from "next/navigation";
import { Header } from "../dashboard/header";

const persistor = persistStore(store);

const Layout = ({ children }: any): JSX.Element => {
  const router = usePathname();
  console.log(router);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {router === "/" && <Header />}

          {children}
        </PersistGate>
        <Toaster />
      </Provider>
    </>
  );
};

export default Layout;
