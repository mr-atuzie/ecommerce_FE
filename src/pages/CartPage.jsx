import React from "react";
// import { productData } from "../data";
import CartItem from "../components/CartItem";
// import axios from "axios";
import { useSelector } from "react-redux";

const CartPage = () => {
  // const [cart, setCart] = useState([]);
  // const [ready, setReady] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  // const cart = sessionStorage.getItem("key");

  console.log(cart);

  // useEffect(() => {
  //   axios.get("/api/v1/cart").then(({ data }) => {
  //     setCart(data);
  //     console.log(data);
  //     setReady(true);
  //   });
  // }, []);

  console.log(cart);

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
      <div className=" mb-32">
        {cart?.length >= 1 &&
          cart?.map((product, index) => {
            const { images, name, price, category, quantity, id } = product;

            return (
              <CartItem
                imageurl={images[0]}
                id={id}
                name={name}
                price={price}
                category={category}
                quantity={quantity}
                key={index}
              />
            );
          })}
      </div>
    </>
  );
};

export default CartPage;
