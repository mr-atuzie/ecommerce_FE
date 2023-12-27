import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const logo = (
  <Link to="/">
    <h2 className=" text-4xl font-light text-pink-500">W</h2>
  </Link>
);

const activeLink = ({ isActive }) =>
  isActive ? "text-pink-600" : "text-black";

const Header = () => {
  const links = [
    { title: "home", to: "/" },
    { title: "about", to: "/about" },
    { title: "blog", to: "/blog" },
    { title: "service", to: "/service" },
    { title: "contact", to: "/contact" },
  ];

  const lists = [
    "New arrivals",
    "clothing",
    "shoes",
    "bags",
    "accessories",
    "premium",
    "Brands",
    "sale",
  ];
  return (
    <header className=" py-3 ">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className=" flex items-center justify-between ">
          <div className=" flex items-center gap-20">
            {logo}

            <ul className=" flex gap-6">
              {links.map((link, index) => {
                const { title, to } = link;
                return (
                  <li key={index} className=" font-medium capitalize">
                    <NavLink to={to} className={activeLink}>
                      {title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" flex gap-10">
            <form>
              <div className=" py-1.5  px-2.5 w-[250px] flex bg-gray-300 rounded-lg items-center">
                <IoSearchOutline size={25} />
                <input
                  type="search"
                  id="default-search"
                  className="block w-full  text-sm text-gray-900 bg-transparent    focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search"
                  required
                />
              </div>
            </form>

            <div className=" flex gap-5 items-center">
              <div>
                <Link to={"/"}>
                  <div className=" flex items-center gap-2 ">
                    <span>Log in</span>
                    <HiOutlineUser size={25} />
                  </div>
                </Link>
              </div>

              <HiOutlineShoppingBag size={25} />
            </div>
          </div>
        </div>
        <hr className=" border border-gray-500 my-4" />
        <ul className=" flex  gap-6 ">
          {lists.map((list, index) => {
            return (
              <li
                key={index}
                className=" cursor-pointer text-sm font-medium capitalize"
              >
                {list}
              </li>
            );
          })}
        </ul>
        <hr className=" border border-gray-500 mt-4" />
      </div>
    </header>
  );
};

export default Header;
