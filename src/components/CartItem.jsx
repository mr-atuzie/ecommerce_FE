import React from "react";
import { Link } from "react-router-dom";
import { USDollar } from "../utils";

const CartItem = ({ id, imageurl, name, price }) => {
  return (
    <Link
      to={`/product/${id}`}
      className=" flex items-center gap-2 bg-white mb-4 "
    >
      {imageurl && (
        <img
          className="rounded-xl  w-20 object-cover aspect-square "
          src={imageurl}
          alt=""
        />
      )}

      <div className=" w-full px-2">
        <h2 className=" font-medium leading-5 text-xs truncate">{name}</h2>
        <div className="flex items-center mt-0.5 justify-between">
          <p className="font-bold">${USDollar.format(price)}</p>

          <div className=" flex items-center gap-3">
            <button className=" rounded-md  bg-emerald-500 text-white font-medium text-sm   flex justify-center items-center p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span className=" text-sm font-medium">1</span>
            <button className=" rounded-md  text-emerald-500 border border-emerald-500 font-medium text-sm   flex justify-center items-center p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
