import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../data";
import ProductSlider from "../components/ProductSlider";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SET_CART } from "../redux/features/cart/cartSlice";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imagePreview, setImagePreview] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const item = productData.find((product) => product.id === Number(id));
    setProduct(item);
    setImagePreview(0);
  }, [id]);

  const handleQuantity = (value) => {
    console.log(value);
    if (value === "add") {
      setQuantity(quantity + 1);
    }

    if (value === "sub" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = async (items) => {
    try {
      const { data } = await axios.patch("/api/v1/cart/addToCart", items);

      const cart = data.cart;
      await dispatch(SET_CART(cart));
      toast.success(`${items.name} added to cart`);
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

  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  return (
    <div className="py-4 lg:py-14  mb-32">
      <div className="lg:w-[60%] mx-auto">
        <div className=" flex flex-col mb-4 lg:hidden">
          <h1 className=" font-semibold capitalize lg:text-xl">
            {product?.name}
          </h1>
          <p className="text-[10px] text-emerald-500 -mt-1  uppercase font-medium">
            <span> {product?.category}</span>
          </p>
          <h1 className=" flex items-center ">
            $
            <span className="font-semibold text-2xl  capitalize ">
              {product?.price}
            </span>
          </h1>
        </div>

        <div className=" flex flex-col lg:flex-row justify-between">
          <div className=" lg:w-[50%]  justify-center overflow-hidden flex gap-3">
            <div className=" w-[80%] lg:w-full ">
              <div>
                <img
                  className=" rounded-xl bg-gray-200 object-cover h-80 lg:h-full w-full "
                  src={product?.images[imagePreview]}
                  alt=""
                />
              </div>
            </div>
            <div className=" grid lg:gap-2 ">
              {product?.images.map((image, index) => {
                console.log(image);
                return (
                  <img
                    onClick={() => setImagePreview(index)}
                    key={index}
                    className={`${
                      index === imagePreview
                        ? " border-2 border-emerald-500"
                        : ""
                    } object-cover rounded-xl w-20 lg:h-full aspect-square  bg-gray-200`}
                    src={image}
                    alt=""
                  />
                );
              })}
            </div>
          </div>

          <div className=" lg:w-[45%]">
            <div className=" hidden lg:block">
              <h1 className=" font-semibold capitalize lg:text-xl">
                {product?.name}
              </h1>
              <p className="text-xs text-emerald-500 -mt-1  uppercase font-medium">
                <span> {product?.category}</span>
              </p>
              <h1 className=" flex items-center ">
                $
                <span className="font-semibold text-2xl  capitalize ">
                  {product?.price}
                </span>
              </h1>
            </div>

            <p className=" text-gray-700 mt-2  text-sm lg:text-base">
              {product?.desc}
            </p>
            <div className=" flex items-center gap-3 mt-2 lg:mt-4">
              <button
                onClick={() => handleQuantity("add")}
                className=" rounded-md hover:scale-120  bg-emerald-500 border-emerald-500 text-white font-medium text-sm   flex justify-center items-center p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 lg:w-5 lg:h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className=" text-sm lg:text-base font-medium">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantity("sub")}
                className=" rounded-md hover:scale-120  text-emerald-500 border border-emerald-500 font-medium text-sm   flex justify-center items-center p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 lg:w-5 lg:h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={() =>
                addToCart({
                  id,
                  productId: makeid(id),
                  name: product.name,
                  price: product.price,
                  quantity,
                  size: product.size,
                  description: product.desc,
                  category: product.category,
                  image: product.images[0],
                })
              }
              className="bg-emerald-500 lg:text-base hover:scale-100 hover:bg-white hover:text-emerald-500 hover:border-emerald-500 py-3 rounded-xl justify-center border border-emerald-500 my-4  w-full text-center text-white text-sm flex gap-1 items-center"
            >
              Add to cart
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </span> */}
            </button>
          </div>
        </div>
      </div>
      <ProductSlider
        heading={`You may also like`}
        hide
        products={productData}
      />
    </div>
  );
};

export default ProductPage;
