import React, { useState } from "react";
import loginImg from "../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {};
  return (
    <section className="w-[90%] lg:w-[80%] h-[80vh] mx-auto  relative  flex justify-around  items-center">
      <div className=" hidden lg:block">
        <img src={loginImg} width={400} alt="login" />
      </div>
      <div className=" shadow-2xl p-5  bg-white w-full lg:w-[40%]">
        <h2 className=" font-bold capitalize text-3xl text-center mb-6">
          login
        </h2>
        <form onSubmit={loginUser}>
          <input
            className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded"
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="mb-4 rounded bg-red-600 text-white font-medium text-sm w-full py-2.5"
            type="submit"
          >
            Login
          </button>
        </form>

        <span className=" text-sm text-gray-500 gap-1 flex items-center">
          <p>Don't have an account?</p>
          <Link className="font-semibold text-black" to={"/register"}>
            Register
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
