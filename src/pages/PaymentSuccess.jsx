import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useDispatch } from "react-redux";
import { CLEAR_CART } from "../redux/features/cart/cartSlice";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    dispatch(CLEAR_CART());
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [dimension, dispatch]);

  return (
    <div>
      PaymentSuccess
      <Confetti
        width={dimension.width}
        height={dimension.height}
        tweenDuration={1000}
      />
    </div>
  );
};

export default PaymentSuccess;
