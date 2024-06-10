import React, { useState } from "react";
import { useSelector } from "react-redux";
import { USDollar } from "../utils";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const { cart, cartTotal } = useSelector((state) => state.cart);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const makePayment = async () => {
    const body = {
      products: cart,
    };

    try {
      const stripe = await loadStripe(
        "pk_test_51PL7AtJPXBH06mUhMnLGbCOQlh9bvij17UHaCdhlC5ELPsIbFMz1jXUc2aqVw5c3pp2kkHvfcpxhC8xP0lcrYdhs00rJwueMHK"
      );

      const { data } = await axios.post("/api/v1/cart/checkout-session", body);

      const result = stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (result.error) {
        console.log(result.error);
      }

      // dispatch(CLEAR_CART());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" w-[90%] mx-auto py-5">
        <div className=" mb-4">
          <div className=" flex gap-2 items-center">
            <button onClick={() => navigate(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <h1 className=" font-semibold text-xl">Delivery Form</h1>
          </div>
          <p className=" text-xs text-gray-500">
            Please enter your delivery details
          </p>
        </div>

        <div className=" font-mono  w-full border-2 border-dashed p-3 rounded-xl  mb-4">
          <div className=" flex mt-1 ">
            <h2 className="grow font-semibold text-gray-400">Cattotal:</h2>
            <h2 className="font-semibold ">${USDollar.format(cartTotal)}</h2>
          </div>
          <div className=" flex mt-1 ">
            <h2 className="grow font-semibold text-gray-400">Delivery:</h2>
            <h2 className="font-semibold ">$20</h2>
          </div>
          <div className=" flex mt-1 pt-2 border-t-2 border-dashed border-emerald-500">
            <h2 className="grow font-semibold text-gray-400">Total:</h2>
            <h2 className=" font-semibold">
              ${USDollar.format(cartTotal + 20)}
            </h2>
          </div>
        </div>

        <label className=" text-sm text-gray-600">Recipient name</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Enter fullname"
          required
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />

        <label className=" text-sm text-gray-600">Address</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Enter street address"
          required
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
        />

        <label className=" text-sm text-gray-600">State</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Enter delivery state"
          required
          value={state}
          onChange={(ev) => setState(ev.target.value)}
        />

        <label className=" text-sm text-gray-600">City</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Enter delivery city"
          required
          value={city}
          onChange={(ev) => setCity(ev.target.value)}
        />

        <label className=" text-sm text-gray-600">Phone Number</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Phone number"
          required
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <button
          onClick={makePayment}
          className=" bg-emerald-500 px-5 py-2.5  shadow-md my-4 rounded-xl w-full text-white"
        >
          Continue Checkout
        </button>
      </div>
    </div>
  );
};

export default Shipping;
