import React, { useEffect, useState } from "react";
import registerImg from "../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { RESET_AUTH, register } from "../redux/features/auth/authSlice";
import Loader from "../components/Loader";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }

    if (password.length < 7) {
      return toast.error("Password must be up to 7 characters");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    if (password !== cPassword) {
      return toast.error("Passwords do not match");
    }

    const userData = { name, email, password };
    await dispatch(register(userData));
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
      <section className="w-[90%] lg:w-[80%] h-[80vh] mx-auto  relative  flex justify-around  items-center">
        <div className=" shadow-2xl p-5  bg-white w-full lg:w-[40%]">
          <h2 className=" font-bold capitalize text-3xl text-center mb-6">
            Register
          </h2>
          <form onSubmit={registerUser}>
            <input
              className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

            <input
              className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="password"
              placeholder="Confirm Password"
              required
              value={cPassword}
              onChange={(e) => setCpassword(e.target.value)}
            />

            <button
              className="mb-4 rounded bg-emerald-500 text-white font-medium text-sm w-full py-2.5"
              type="submit"
            >
              Register
            </button>
          </form>

          <span className=" text-sm text-center justify-center text-gray-500 gap-1 flex items-center">
            <p>Already have an account?</p>
            <Link className="font-semibold text-black" to={"/login"}>
              Login
            </Link>
          </span>
        </div>
        <div className=" hidden lg:block">
          <img src={registerImg} width={400} alt="register" />
        </div>
      </section>
    </>
  );
};

export default Register;
