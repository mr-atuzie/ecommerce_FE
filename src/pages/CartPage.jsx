import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { USDollar } from "../utils";

const CartPage = () => {
  const { cart, cartTotal } = useSelector((state) => state.cart);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      {cart < 1 && (
        <div className="mt-10  text-gray-400 flex justify-center items-center flex-col">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>

          <p className=" text-center  font-medium">Cart is Empty</p>
        </div>
      )}

      {cart?.length >= 1 && (
        <div className="  mb-32">
          {cart?.map((product, index) => {
            const { image, name, price, category, quantity, id, size, desc } =
              product;

            return (
              <CartItem
                key={index}
                id={id}
                imageurl={image}
                name={name}
                price={price}
                description={desc}
                size={size}
                category={category}
                quantity={quantity}
              />
            );
          })}

          <div>
            <input
              className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="State"
              required
              value={state}
              onClick={(ev) => setState(ev.target.value)}
            />
            <input
              className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(ev) => setCity(ev.target.value)}
            />
            <input
              className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Street address"
              required
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
            />
            <input
              className=" block p-2.5 w-full bg-gray-100 mb-4 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Phone number"
              required
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>
          <div className="  w-full mt-5">
            <div className=" flex mt-1">
              <h2 className="grow font-semibold text-gray-400">Subtotal:</h2>
              <h2 className="font-semibold text-sm">
                ${USDollar.format(cartTotal)}
              </h2>
            </div>
            <div className=" flex mt-1">
              <h2 className="grow font-semibold text-gray-400">Delivery:</h2>
              <h2 className="font-semibold text-sm">$20</h2>
            </div>
            <div className=" flex mt-1 pt-2 border-t border-dashed border-emerald-500">
              <h2 className="grow font-semibold text-gray-400">Total:</h2>
              <h2 className=" font-semibold">
                ${USDollar.format(cartTotal + 20)}
              </h2>
            </div>
          </div>

          <button className=" bg-emerald-500 px-5 py-2.5 font-semibold shadow-md my-4 rounded-xl w-full text-white">
            Checkout ${USDollar.format(cartTotal + 20)}
          </button>
        </div>
      )}
    </>
  );
};

export default CartPage;
