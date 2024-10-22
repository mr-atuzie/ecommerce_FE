import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { validateEmail } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { RESET_AUTH, login } from "../redux/features/auth/authSlice";
import Loader from "../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (password.length < 7) {
      return toast.error("Password must be up to 7 characters");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = { email, password };
    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/");
    }

    dispatch(RESET_AUTH());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <>
      {isLoading && <Loader />}
      <section className="   relative  flex justify-center  items-center">
        <div className=" mt-10 p-2 lg:p-5  bg-white w-full lg:w-[40%]">
          <h2 className=" font-bold capitalize text-3xl text-center mb-6">
            login
          </h2>
          <form onSubmit={loginUser}>
            <input
              className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="mb-4 rounded-xl bg-emerald-500 text-white font-medium text-sm w-full py-2.5"
              type="submit"
            >
              Login
            </button>
          </form>

          <span className=" text-sm text-center justify-center text-gray-500 gap-1 flex items-center">
            <p>Don't have an account?</p>
            <Link className="font-semibold text-black" to={"/register"}>
              Register
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default Login;
