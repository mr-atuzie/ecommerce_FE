import React from "react";
import { USDollar, shortenText } from "../utils";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SET_CART } from "../redux/features/cart/cartSlice";
import axios from "axios";

const CartItem = ({
  id,
  imageurl,
  name,
  price,
  category,
  quantity,
  // setCart,
}) => {
  const dispatch = useDispatch();
  const removeFromCart = async () => {
    try {
      const { data } = await axios.patch("/api/v1/cart/remove", { id });
      // setCart(data);
      dispatch(SET_CART(data));
      toast.success(`${name} removed from cart`);
    } catch (error) {}
  };
  return (
    <div className=" flex items-center border rounded-xl overflow-hidden  gap-2 bg-white mb-4 ">
      {imageurl && <img className="  h-20 " src={imageurl} alt="" />}

      <div className=" w-full py-2 px-2">
        <div className="flex justify-between">
          <div>
            <h2 className="leading-5 font-medium lg:text-base text-sm truncate">
              <span>{quantity}</span> {shortenText(name, 20)}
            </h2>
            <p className=" text-xs truncate capitalize  text-emerald-500">
              {category}
            </p>
          </div>

          <button
            className=" font-medium  text-red-600 p-2 w-6 flex hover:scale-100 justify-center items-center h-6 rounded-full"
            onClick={() => removeFromCart(id)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 font-semibold"
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

        <p className=" text-[10px] flex items-center">
          $
          <span className="text-sm font-medium ">
            {USDollar.format(price * quantity)}
          </span>
        </p>

        {/* <div className=" mt-2">
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
        </div> */}
      </div>
    </div>
  );
};

export default CartItem;
