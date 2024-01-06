import React, { useState } from "react";
import registerImg from "../assets/register.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  const registerUser = () => {};
  return (
    <section className="w-[90%] lg:w-[80%] h-[80vh] mx-auto  relative  flex justify-around  items-center">
      <div className=" shadow-2xl p-5  bg-white w-full lg:w-[40%]">
        <h2 className=" font-bold capitalize text-3xl text-center mb-6">
          Register
        </h2>
        <form onSubmit={registerUser}>
          <input
            className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded placeholder:text-sm placeholder:font-light"
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded placeholder:text-sm placeholder:font-light"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded placeholder:text-sm placeholder:font-light"
            type="password"
            placeholder="Password"
            required
            value={cPassword}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded placeholder:text-sm placeholder:font-light"
            type="password"
            placeholder="Confirm Password"
            required
            value={password}
            onChange={(e) => setCpassword(e.target.value)}
          />

          <button
            className="mb-4 rounded bg-red-600 text-white font-medium text-sm w-full py-2.5"
            type="submit"
          >
            Register
          </button>
        </form>

        <span className=" text-sm text-gray-500 gap-1 flex items-center">
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
  );
};

export default Register;
