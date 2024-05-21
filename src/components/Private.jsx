import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { selectIsLoggedIn } from "../redux/features/auth/authSlice";

const Private = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default Private;
