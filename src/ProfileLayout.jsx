import React from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav";

const ProfileLayout = () => {
  return (
    <>
      <div className="  w-[92%] mx-auto">
        <Outlet />
      </div>
      <MobileNav />
    </>
  );
};

export default ProfileLayout;
