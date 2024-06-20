import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";
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
// import { SET_CART } from "./redux/features/cart/cartSlice";
import Shipping from "./pages/Shipping";
import Orders from "./pages/Orders";
import ProfileLayout from "./ProfileLayout";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import { SET_CART } from "./redux/features/cart/cartSlice";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const App = () => {
  // const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getLoginStatus = () => {
      dispatch(loginStatus());
    };
    getLoginStatus();
  }, [dispatch]);

  useEffect(() => {
    console.log("rex");

    const getUser = async () => {
      const { data } = await axios.get("api/v1/users/getUser");
      dispatch(SET_CART(data.cart));
    };
    getUser();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollTop />

        <Routes>
          <Route path="/cancel-payment" element={<PaymentCancel />} />

          <Route
            path="/shipping"
            element={
              <Private>
                <Shipping />
              </Private>
            }
          />
          <Route path="/" element={<Layout />}>
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route index element={<Home />} />

            <Route path="/register" element={<Register />} />
            <Route
              path="/cart"
              element={
                <Private>
                  <CartPage />
                </Private>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />

            <Route
              path="/profile"
              element={
                <Private>
                  <Profile />
                </Private>
              }
            />

            <Route
              path="/orders"
              element={
                <Private>
                  <Orders />
                </Private>
              }
            />
          </Route>
          <Route path="/search" element={<ProfileLayout />}>
            <Route index element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
