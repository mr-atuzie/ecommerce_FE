import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const cart = (
    <span className="  ">
      <Link className=" flex" to={"/cart"}>
        <div className=" ml-1 relative flex items-center ">
          <FaShoppingCart size={20} />
          <p className=" bg-red-600 text-white h-4 w-4 text-xs text-center flex justify-center items-center rounded-full absolute -top-1 left-3">
            0
          </p>
        </div>
      </Link>
    </span>
  );

  return (
    <header className=" sticky top-0 w-full z-50 bg-white shadow-sm  py-3">
      <div className=" flex items-center justify-between w-[90%] lg:w-[80%] mx-auto">
        {logo}

        <div className=" hidden  lg:flex">
          <NavLink className={activeLink} to="/shop">
            Shop
          </NavLink>
        </div>

        <nav className=" hidden  lg:flex gap-4">
          <span className="flex gap-4">
            <NavLink className={activeLink} to={"/login"}>
              Login
            </NavLink>

            <NavLink className={activeLink} to={"/register"}>
              Register
            </NavLink>

            <NavLink className={activeLink} to={"/orders"}>
              My Orders
            </NavLink>
          </span>

          {cart}
        </nav>

        <div className=" flex  items-center lg:hidden gap-4">
          {cart}
          <HiOutlineMenuAlt3
            className="text-gray-100 cursor-pointer"
            size={22}
            onClick={toggleMenu}
          />
        </div>
      </div>
      {showMenu && (
        <div
          onClick={hideMenu}
          className=" z-40  bg-black/50 fixed lg:hidden top-0 right-0  w-full h-screen"
        >
          <div className=" w-[60%] bg-black h-screen p-4">
            <div className=" flex justify-between items-center">
              {logo}{" "}
              <FaTimes onClick={hideMenu} size={20} className=" text-white" />
            </div>

            <hr className="border-b  border-gray-600 my-5" />

            <ul>
              <li className="border-b  border-gray-600 mb-5 pb-1.5">
                <NavLink className={activeLink} to="/shop">
                  Shop
                </NavLink>
              </li>

              <li className="border-b  border-gray-600 mb-5 pb-1.5">
                <NavLink className={activeLink} to="/shop">
                  Login
                </NavLink>
              </li>
              <li className="border-b  border-gray-600 mb-5 pb-1.5">
                <NavLink className={activeLink} to="/shop">
                  Register
                </NavLink>
              </li>
              <li className="border-b  border-gray-600 mb-5 pb-1.5">
                <span className="  text-gray-100">
                  <Link className=" flex" to={"/cart"}>
                    Cart
                    <div className=" ml-1 relative flex items-center ">
                      <FaShoppingCart size={13} />
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
