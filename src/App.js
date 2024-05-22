import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginStatus } from "./redux/features/auth/authSlice";
import Profile from "./pages/Profile";
import Layout from "./Layout";
import CategoryPage from "./pages/CategoryPage";
import Private from "./components/Private";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ScrollTop from "./components/ScrollTop";
import SearchPage from "./pages/SearchPage";

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
        <ScrollTop />
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/register" element={<Register />} />
            <Route index element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <Private>
                  <Profile />
                </Private>
              }
            />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
