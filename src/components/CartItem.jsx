import React from "react";
import { USDollar } from "../utils";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { REMOVE_ITEM_CART } from "../redux/features/cart/cartSlice";

const CartItem = ({ id, imageurl, name, price, category, quantity }) => {
  const dispatch = useDispatch();
  const removeFromCart = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/cart/${id}`);
      dispatch(REMOVE_ITEM_CART(id));
      console.log(data);
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
    <div className=" flex items-center border-b py-2 gap-2 bg-white mb-2 ">
      {imageurl && (
        <img
          className="rounded-xl  h-20 object-cover aspect-square "
          src={imageurl}
          alt=""
        />
      )}

      <div className=" w-full px-2">
        <div className="flex justify-between">
          <div>
            <h2 className="leading-5 font-medium text-sm truncate">{name}</h2>
            <p className=" text-xs truncate capitalize  text-emerald-500">
              {category}
            </p>
          </div>

          <button
            className=" font-medium bg-gray-200 p-2 w-6 flex hover:scale-100 justify-center items-center h-6 rounded-full"
            onClick={() => removeFromCart(id)}
          >
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>

        <p className="font-semibold text-sm">${USDollar.format(price)}</p>
        <div className=" mt-2">
          <div className=" flex items-center gap-2">
            <button className=" rounded-md hover:scale-100  bg-emerald-500 text-white border border-emerald-500 font-medium text-sm   flex justify-center items-center p-2">
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
            <span className=" text-sm">{quantity}</span>
            <button className=" rounded-md  hover:scale-100 text-emerald-500 border border-emerald-500 font-medium text-sm   flex justify-center items-center p-2">
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
    </div>
  );
};

export default CartItem;
