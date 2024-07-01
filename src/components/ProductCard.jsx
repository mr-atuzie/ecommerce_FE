import React from "react";
import { USDollar, shortenText } from "../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ADD_TO_CART } from "../redux/features/cart/cartSlice";
import axios from "axios";

const ProductCard = ({
  image,
  name,
  price,
  description,
  id,
  productId,
  category,
  size,
  quantity,
}) => {
  const dispatch = useDispatch();

  const addToCart = async (items) => {
    try {
      const { data } = await axios.patch("/api/v1/cart/addToCart", items);
      console.log(data);
      await dispatch(ADD_TO_CART(items));
      toast.success(`${items.name} added to cart`);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  return (
    <div className=" relative">
      <img
        className="rounded-xl min-h-52 bg-gray-100  w-full  aspect-square  object-cover"
        src={image}
        alt=""
      />

      <Link to={`/product/${id}`}>
        <h2 className=" text-xs truncate lg:text-base mt-1 font-medium">
          {name}
        </h2>

        <p className=" text-gray-500 text-xs hidden lg:block">
          {shortenText(description, 26)}
        </p>

        <p className=" text-xs text-gray-600">${USDollar.format(price)}</p>
        <button
          onClick={() =>
            addToCart({
              productId,
              id,
              name,
              price,
              quantity,
              size,
              description,
              category,
              image,
            })
          }
          className=" absolute top-2 right-2 rounded-md hover:scale-120  bg-emerald-500 text-white font-medium text-sm   flex justify-center items-center p-1"
        >
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
        {/* <div className="flex items-center mt-0.5 justify-between">

        </div> */}
      </Link>
    </div>
  );
};

export default ProductCard;
