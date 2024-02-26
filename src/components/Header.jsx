import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag, FaTimes, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { RESET_AUTH, logout } from "../redux/features/auth/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../protect/Protect";
import { Username } from "../pages/Profile";

const logo = (
  <Link to="/">
    <h2 className=" text-3xl font-bold">
      Shop<span className="text-red-600">iify</span>.
    </h2>
  </Link>
);

const activeLink = ({ isActive }) =>
  isActive ? "text-red-600" : "text-gray-600";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = async () => {
    await dispatch(logout());
    await dispatch(RESET_AUTH);
    navigate("/login");
  };

  const cart = (
    <span className="  ">
      <Link className=" flex" to={"/cart"}>
        <div className=" ml-1 relative flex items-center ">
          <FaShoppingBag size={20} />
          <p className=" bg-red-600 text-white h-4 w-4  font-medium text-xs text-center flex justify-center items-center rounded-full absolute -top-1 left-3">
            0
          </p>
        </div>
      </Link>
    </span>
  );

  return (
    <header className=" sticky top-0 w-full z-40 bg-white shadow-sm  py-3">
      <div className=" flex items-center justify-between w-[90%] lg:w-[80%] mx-auto">
        {logo}

        <div className=" hidden  lg:flex">
          <NavLink className={activeLink} to="/shop">
            Shop
          </NavLink>
        </div>

        <nav className=" hidden  lg:flex gap-4">
          <span className="flex gap-4">
            <ShowOnLogout>
              <NavLink className={activeLink} to={"/login"}>
                Login
              </NavLink>
            </ShowOnLogout>

            <ShowOnLogout>
              <NavLink className={activeLink} to={"/register"}>
                Register
              </NavLink>
            </ShowOnLogout>

            <ShowOnLogin>
              <NavLink className={activeLink} to={"/orders"}>
                My Orders
              </NavLink>
            </ShowOnLogin>

            {/* <ShowOnLogin>
              <NavLink className={activeLink} to={"/profile"}>
                Profile
              </NavLink>
            </ShowOnLogin> */}

            <ShowOnLogin>
              <button onClick={logoutUser}>Logout</button>
            </ShowOnLogin>
          </span>

          {cart}

          <ShowOnLogin>
            <NavLink
              className={`${activeLink} flex gap-2 items-center`}
              to={"/profile"}
            >
              <FaUserCircle />
              <Username />
            </NavLink>
          </ShowOnLogin>
        </nav>

        <div className=" flex  items-center lg:hidden gap-4">
          {cart}
          <RxHamburgerMenu
            className=" cursor-pointer"
            size={22}
            onClick={toggleMenu}
          />
        </div>
      </div>
      {showMenu && (
        <div
          onClick={hideMenu}
          className=" z-40 fixed lg:hidden top-0 right-0  w-full h-screen"
        >
          <div className=" w-[60%] bg-white h-screen p-4">
            <div className=" flex justify-between items-center">
              {logo} <FaTimes onClick={hideMenu} size={20} />
            </div>

            <hr className=" my-5" />

            <ul>
              <li className=" mb-5 pb-1.5">
                <NavLink to="/shop">Shop</NavLink>
              </li>

              <li className="mb-5 pb-1.5">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="  mb-5 pb-1.5">
                <NavLink to="/register">Register</NavLink>
              </li>
              <li className="  mb-5 pb-1.5">
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li className="  mb-5 pb-1.5">
                <span className="  ">
                  <Link className=" flex" to={"/cart"}>
                    Cart
                    <div className=" ml-1 relative flex items-center ">
                      <FaShoppingBag size={13} />
                      <p className=" bg-red-600 text-white h-4 w-4 text-xs text-center flex justify-center items-center rounded-full absolute -top-1 left-3">
                        0
                      </p>
                    </div>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
