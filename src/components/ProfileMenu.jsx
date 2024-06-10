import React from "react";
import { NavLink } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <nav className=" my-3">
      <ul className=" flex gap-5 justify-center items-center">
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? " border-b-2 text-emerald-500 border-emerald-500 "
              : " text-gray-500"
          }
        >
          <li className=" gap-2 text-center font-medium flex justify-center items-center text-sm  p-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <span>Profile</span>
          </li>
        </NavLink>

        {/* <NavLink
          to={"/shipping"}
          className={({ isActive }) =>
            isActive ? " bg-emerald-500 text-white rounded-xl" : ""
          }
        >
          <li className=" text-center flex justify-center items-center gap-1 text-sm px-4 py-2">
            <span>Shipping form</span>
          </li>
        </NavLink> */}

        <NavLink
          to={"/orders"}
          className={({ isActive }) =>
            isActive
              ? " border-b-2 text-emerald-500 border-emerald-500 "
              : " text-gray-500"
          }
        >
          <li className=" gap-2 text-center font-medium flex justify-center items-center text-sm p-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </span>
            <span> Orders</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default ProfileMenu;
