import React, { useState } from "react";
import ReactDOM from "react-dom";
import { USDollar } from "../utils";
// import { loadStripe } from "@stripe/stripe-js";

const ShippingFormModal = ({ cartTotal, setShipping }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // const makePayment = async () => {
  //   const stripe = await loadStripe("")
  // };

  return ReactDOM.createPortal(
    <div className=" w-full h-screen bg-black/90 fixed top-0 z-50 flex justify-center items-center">
      <div className=" w-[90%] p-3 bg-white rounded-xl">
        <div className=" flex justify-between items-start">
          <div>
            <h1 className=" font-semibold text-xl">Delivery Form</h1>
            <p className=" text-xs text-gray-500 mb-4">
              Please enter delivery details correctly
            </p>
          </div>
          <button onClick={() => setShipping(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <label className=" text-sm">Fullname</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Enter fullname"
          required
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <label className=" text-sm">Delivery State</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Enter state"
          required
          value={state}
          onClick={(ev) => setState(ev.target.value)}
        />
        <label className=" text-sm">Delivey City</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Enter city"
          required
          value={city}
          onChange={(ev) => setCity(ev.target.value)}
        />
        <label className=" text-sm">Address</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Enter street address"
          required
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
        />

        <label className=" text-sm">Phone Number</label>
        <input
          className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
          type="text"
          placeholder="Phone number"
          required
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <button
          // onClick={makePayment}
          className=" bg-emerald-500 px-5 py-2.5 font-semibold shadow-md my-4 rounded-xl w-full text-white"
        >
          Pay ${USDollar.format(cartTotal + 20)}
        </button>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default ShippingFormModal;
