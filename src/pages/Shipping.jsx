import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USDollar } from "../utils";
// import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";
import { CLEAR_CART } from "../redux/features/cart/cartSlice";
import { getUser } from "../redux/features/auth/authSlice";
import PaystackPayment from "../components/PaystackPayment";
import Loader from "../components/Loader";

const Shipping = () => {
  // const { cart, cartTotal } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data } = await axios.get("api/v1/users/getUser");
      setCart(data.cart);
      setCartTotal(
        data.cart.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        )
      );
      setLoading(false);
      console.log(data.cart);
    };
    getUser();
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [redirect, setRedirect] = useState(false);

  // const makePayment = async () => {
  //   if (!name || !phone || !address || !state || !city) {
  //     return toast.error("Please enter deliery details.");
  //   }

  //   const body = {
  //     products: cart,
  //     shipping: { name, phone, address, state, city },
  //   };

  //   try {
  //     const stripe = await loadStripe(
  //       "pk_test_51PL7AtJPXBH06mUhMnLGbCOQlh9bvij17UHaCdhlC5ELPsIbFMz1jXUc2aqVw5c3pp2kkHvfcpxhC8xP0lcrYdhs00rJwueMHK"
  //     );

  //     const { data } = await axios.post("/api/v1/cart/checkout-session", body);

  //     const result = stripe.redirectToCheckout({
  //       sessionId: data.id,
  //     });

  //     if (result.error) {
  //       console.log(result.error);
  //     }

  //     dispatch(
  //       CREATE_ORDER({
  //         delivery: { name, address, state, city, phone },
  //         items: cart,
  //       })
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const orderProducts = async () => {
    if (!name || !phone || !address || !state || !city) {
      return toast.error("Please enter deliery details.");
    }

    const body = {
      products: cart,
      shipping: { name, phone, address, state, city },
    };

    try {
      const { data } = await axios.post("/api/v1/cart/order", body);
      dispatch(CLEAR_CART());
      setRedirect(true);
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

  const publicKey = "pk_test_820864edf00e25d73eeb6bf0d1df11ff33fa62e9";
  const email = user?.email;
  const amount = cartTotal; // Amount in dollar

  const handleSuccess = (reference) => {
    console.log(reference);
    orderProducts();
    // Handle the successful payment here
  };

  const handleClose = () => {
    console.log("Payment closed");
    navigate("/cart");
    // Handle the payment closure here
  };

  if (redirect) {
    return <Navigate to={"/payment-success"} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="lg:py-10 py-3">
        <div className=" mb-4 flex flex-col justify-center text-center items-center">
          <h1 className=" font-semibold text-xl lg:text-3xl">Delivery Form</h1>
          <p className=" lg:text-sm text-xs text-gray-500">
            Please enter your delivery details
          </p>
        </div>

        <div className=" lg:flex lg:justify-around">
          <div className=" lg:w-[50%]">
            <label className=" text-sm">Recipient name</label>
            <input
              className=" block p-2.5 lg:p-3 w-full bg-gray-100 mb-4 lg:mb-7 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Enter fullname"
              required
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />

            <label className=" text-sm ">Address</label>
            <input
              className=" block p-2.5 lg:p-3 w-full bg-gray-100 mb-4 lg:mb-7 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Enter street address"
              required
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
            />

            <label className=" text-sm ">State</label>
            <input
              className=" block p-2.5 lg:p-3 w-full bg-gray-100 mb-4 lg:mb-7 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Enter delivery state"
              required
              value={state}
              onChange={(ev) => setState(ev.target.value)}
            />

            <label className=" text-sm ">City</label>
            <input
              className=" block p-2.5 lg:p-3 w-full bg-gray-100 mb-4 lg:mb-7 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Enter delivery city"
              required
              value={city}
              onChange={(ev) => setCity(ev.target.value)}
            />

            <label className=" text-sm ">Phone Number</label>
            <input
              className=" block p-2.5 lg:p-3 w-full bg-gray-100 mb-4 lg:mb-7 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Phone number"
              required
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>

          <div className=" lg:w-[35%]">
            <h1 className=" font-medium text-sm mb-2">Cart Summary</h1>
            <div className=" font-mono bg-gray-50 text-sm  w-full border-2 border-dashed p-3 rounded-xl  mb-5">
              <div className=" flex mt-1 ">
                <h2 className="grow font-semibold text-gray-400">Subtotal:</h2>
                <h2 className="font-semibold ">
                  ${USDollar.format(cartTotal)}
                </h2>
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

            {!name || !phone || !address || !state || !city ? (
              <button
                disabled={true}
                className=" disabled:opacity-70 bg-emerald-500 lg:text-base px-5 lg:py-3 py-2 font-medium hover:border-2 hover:bg-white hover:text-emerald-500 hover:border-emerald-500  shadow-md my-4 rounded-xl w-full text-white"
              >
                Pay ${USDollar.format(cartTotal + 20)}
              </button>
            ) : (
              <PaystackPayment
                email={email}
                amount={amount}
                publicKey={publicKey}
                onSuccess={handleSuccess}
                onClose={handleClose}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
