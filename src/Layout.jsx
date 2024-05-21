import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";

const Layout = () => {
  return (
    <>
      <div className="  w-[95%] mx-auto">
        <Header />
        <Outlet />
      </div>
      <MobileNav />
    </>
  );
};

export default Layout;
