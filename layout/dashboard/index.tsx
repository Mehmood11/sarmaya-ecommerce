import React from "react";
import { Header } from "./header";

const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="py-1 px-8 mt-20 h-full">{children}</div>
    </>
  );
};

export default DashboardLayout;
