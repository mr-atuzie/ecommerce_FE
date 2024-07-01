import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
// import { useSelector } from "react-redux";
import { USDollar } from "../utils";
import ShippingFormModal from "../components/ShippingFormModal";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
const CartPage = () => {
  const [cart, setCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);
  const [shipping, setShipping] = useState(false);

  const { cartTotal } = useSelector((state) => state.cart);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get("api/v1/users/getUser");
      setCart(data.cart);
    };
    getUser();
  }, [cart]);

  return (
    <>
      {cart?.length < 1 && (
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
        <div className=" mt-4  mb-32">
          <h1 className=" font-semibold -mb-3 text-lg">Cart</h1>
          {/* <div className=" flex gap-2 items-center">
            <span className=""> ${USDollar.format(cartTotal)}</span>
          </div> */}
          <span className="text-xs  text-gray-400">{cart.length} items</span>
          {cart?.map((product, index) => {
            const {
              image,
              name,
              price,
              category,
              quantity,
              productId,
              size,
              desc,
            } = product;

            return (
              <CartItem
                key={index}
                id={productId}
                imageurl={image}
                name={name}
                price={price}
                description={desc}
                size={size}
                category={category}
                quantity={quantity}
                setCart={setCart}
              />
            );
          })}

          {shipping && (
            <ShippingFormModal
              setShipping={setShipping}
              cartTotal={cartTotal}
            />
          )}

          <div className=" font-mono text-sm  w-full border-2 border-dashed p-3 rounded-xl  mt-5">
            <div className=" flex mt-1 ">
              <h2 className="grow font-semibold text-gray-400">Subtotal:</h2>
              <h2 className="font-semibold ">${USDollar.format(cartTotal)}</h2>
            </div>
            <div className=" flex mt-1 ">
              <h2 className="grow font-semibold text-gray-400">Delivery:</h2>
              <h2 className="font-semibold ">$20</h2>
            </div>
            <div className=" flex mt-1 pt-2 border-t border-dashed border-emerald-500">
              <h2 className="grow font-semibold text-gray-400">Total:</h2>
              <h2 className=" font-semibold">
                ${USDollar.format(cartTotal + 20)}
              </h2>
            </div>
          </div>

          <Link to={"/shipping"}>
            <button className=" bg-emerald-500 text-sm h px-5 py-2.5 font-semibold hover:bg-white hover:text-emerald-500 hover:border-emerald-500 shadow-md my-4 rounded-xl w-full text-white">
              Checkout ${USDollar.format(cartTotal + 20)}
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;
