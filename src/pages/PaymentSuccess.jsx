import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const PaymentSuccess = () => {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [dimension]);

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
