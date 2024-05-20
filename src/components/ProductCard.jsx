import React from "react";
import { shortenText } from "../utils";

const ProductCard = ({ imageurl, price, name, description }) => {
  return (
    <div>
      <div className="bg-gray-500 mb-2 rounded-xl">
        <img
          className="rounded-xl  w-full  aspect-square  object-cover"
          src={imageurl}
          alt=""
        />
      </div>

      <h4 className=" text-xs lg:text-base font-medium">
        {shortenText(name, 18)}
      </h4>

      <p className=" text-gray-500 text-sm hidden lg:block">
        {shortenText(description, 26)}
      </p>

      <div className="flex justify-between">
        <p className="text-sm  font-medium">{price}</p>

        <button className=" rounded-md  bg-emerald-500 text-white font-medium text-sm  p-2">
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
