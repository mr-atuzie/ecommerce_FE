import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
// import { useDispatch, useSelector } from "react-redux";
// import { CLEAR_CART, CLEAR_ORDER } from "../redux/features/cart/cartSlice";
// import { toast } from "react-toastify";
// import axios from "axios";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  // const dispatch = useDispatch();

  // const { order } = useSelector((state) => state.cart);

  // console.log(order);

  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    // const orderProducts = async () => {
    //   try {
    //     const { data } = await axios.post("/api/v1/cart/order", order);

    //     console.log(data);
    //   } catch (error) {
    //     const message =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     toast.error(message);
    //   }
    // };

    // orderProducts();

    return () => {
      window.removeEventListener("resize", detectSize);
      // dispatch(CLEAR_CART());
      // dispatch(CLEAR_ORDER());
    };
  }, [dimension]);

  return (
    <div className=" flex justify-center items-center flex-col">
      <Confetti
        width={dimension.width}
        height={dimension.height}
        tweenDuration={1000}
      />

      <span className=" mt-16 text-emerald-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-20"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <h1 className=" text-xl font-bold capitalize text-emerals-500">
        Checkout successful
      </h1>
      <p className=" text-gray-500 text-xs text-center">
        Thank you for shopping with us , your order has been placed
      </p>

      <Link to={"/orders"}>
        <button className=" bg-gray-300 rounded-lg text-center px-8 py-2 text-sm font-medium mt-6">
          View order
        </button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
