import React from "react";
import { USDollar, shortenText } from "../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { SET_CART } from "../redux/features/cart/cartSlice";
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
      const cart = data.cart;
      await dispatch(SET_CART(cart));
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
        className="rounded-xl h-52 lg:h-80 bg-gray-100  w-full  aspect-square  object-cover"
        src={image}
        alt=""
      />

      <Link to={`/product/${id}`}>
        <h2 className=" text-xs truncate lg:text-base mt-1 font-medium">
          {name}
        </h2>

        <p className=" text-gray-600 text-xs hidden lg:block">
          {shortenText(description, 36)}
        </p>

        <p className=" flex items-center text-xs">
          ${" "}
          <span className=" text-sm font-semibold ">
            {USDollar.format(price)}
          </span>
        </p>

        {/* <div className="flex items-center mt-0.5 justify-between">

</div> */}
      </Link>
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
        className=" absolute shadow-lg shadow-gray-200 top-2 right-2 rounded-md hover:scale-120  bg-emerald-500 text-white font-medium text-sm   flex justify-center items-center p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
