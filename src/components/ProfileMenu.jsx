import React from "react";
import { NavLink } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <nav className=" my-3">
      <ul className=" flex gap-5 justify-center items-center">
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive ? " bg-emerald-500 text-white rounded-xl" : ""
          }
        >
          <li className=" text-center flex justify-center items-center text-sm px-4 py-2">
            <span>Profile</span>
          </li>
        </NavLink>

        <NavLink
          to={"/shipping"}
          className={({ isActive }) =>
            isActive ? " bg-emerald-500 text-white rounded-xl" : ""
          }
        >
          <li className=" text-center flex justify-center items-center gap-1 text-sm px-4 py-2">
            <span>Shipping form</span>
          </li>
        </NavLink>

        <NavLink
          to={"/shipping"}
          className={({ isActive }) =>
            isActive ? " bg-emerald-500 text-white rounded-xl" : ""
          }
        >
          <li className=" text-center flex justify-center items-center gap-1 text-sm px-4 py-2">
            <span> Orders</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default ProfileMenu;
