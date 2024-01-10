import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginStatus } from "./redux/features/auth/authSlice";
import Profile from "./pages/Profile";

const App = () => {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  useEffect(() => {
    const getLoginStatus = () => {
      dispatch(loginStatus());
    };
    getLoginStatus();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
