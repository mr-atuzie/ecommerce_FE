import React from "react";
import { USDollar, shortenText } from "../utils";

const ProductCard = ({ imageurl, price, name, description }) => {
  return (
    <div>
      <div className="bg-gray-500 mb-2 rounded-xl">
        <img
          className="rounded-xl min-h-60  w-full  aspect-square  object-cover"
          src={imageurl}
          alt=""
        />
      </div>

      <h4 className=" text-sm lg:text-base font-medium">
        {shortenText(name, 18)}
      </h4>

      <p className=" text-gray-500 text-xs hidden lg:block">
        {shortenText(description, 26)}
      </p>

      <div className="flex justify-between">
        <p className="font-medium">${USDollar.format(price)}</p>

        <button className=" rounded-md  bg-emerald-500 text-white font-medium text-sm  p-1">
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
