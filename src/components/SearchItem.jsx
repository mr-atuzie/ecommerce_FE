import React from "react";
import { Link } from "react-router-dom";
import { USDollar } from "../utils";

const SearchItem = ({ id, imageurl, name, price, category }) => {
  return (
    <Link
      to={`/product/${id}`}
      className=" flex items-center gap-2 bg-white mb-4 lg:mb-6 "
    >
      {imageurl && (
        <img
          className="rounded-xl  w-16 object-cover aspect-square "
          src={imageurl}
          alt=""
        />
      )}

      <div className=" w-full  px-2">
        <h2 className="leading-5 font-medium text-sm lg:text-base truncate">
          {name}
        </h2>
        <p className=" text-xs truncate capitalize text-emerald-500">
          {category}
        </p>
        <div className="flex items-center  justify-between">
          <p className="font-semibold text-sm">${USDollar.format(price)}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
