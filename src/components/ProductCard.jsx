import React from "react";
import { USDollar, shortenText } from "../utils";

const ProductCard = ({ imageurl, price, name, description }) => {
  return (
    <div>
      <img
        className="rounded-xl min-h-56 bg-gray-100  w-full  aspect-square  object-cover"
        src={imageurl}
        alt=""
      />

      <h2 className=" text-xs truncate lg:text-base mt-1 font-medium">
        {name}
      </h2>

      <p className=" text-gray-500 text-xs hidden lg:block">
        {shortenText(description, 26)}
      </p>

      <div className="flex items-center justify-between">
        <p className="font-bold">${USDollar.format(price)}</p>

        <button className=" rounded-md  bg-emerald-500 text-white font-medium text-sm   flex justify-center items-center p-1">
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
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
