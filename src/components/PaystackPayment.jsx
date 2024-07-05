import React from "react";
import { PaystackButton } from "react-paystack";
import { USDollar } from "../utils";

const PaystackPayment = ({ email, amount, publicKey, onSuccess, onClose }) => {
  const componentProps = {
    email,
    amount: amount * 100, // Paystack expects the amount in kobo
    metadata: {
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: "+2348012345678",
        },
      ],
    },
    publicKey,
    text: `Pay $${USDollar.format(amount + 20)}`,
    onSuccess,
    onClose,
    onError: (error) => {
      console.log(error);
      // Handle error
    },
  };
  return (
    <PaystackButton
      className=" bg-emerald-500 lg:text-base px-5 lg:py-3 py-2 font-medium hover:border-2 hover:bg-white hover:text-emerald-500 hover:border-emerald-500  shadow-md my-4 rounded-xl w-full text-white"
      {...componentProps}
    />
  );
};

export default PaystackPayment;
