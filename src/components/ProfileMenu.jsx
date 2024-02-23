import React from "react";
import { NavLink } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div>
      <nav className=" bg-red-600 p-3">
        <ul className=" flex gap-5 justify-center items-center text-white">
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>

          <li>
            <NavLink to={"/profile"}>Wallet</NavLink>
          </li>

          <li>
            <NavLink to={"/profile"}>Wishlist</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMenu;
