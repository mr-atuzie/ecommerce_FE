import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn } from "../redux/features/auth/authSlice";

const Private = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  console.log(isLoggedIn);

  return isLoggedIn ? children : <Navigate to={"/login"} replace />;
};

export default Private;
