import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../data";
import ProductSlider from "../components/ProductSlider";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/features/cart/cartSlice";

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
      const { data } = await axios.post("/api/v1/cart", items);
      dispatch(ADD_TO_CART(data));
      toast(`${items.name} added to cart`);
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

  const favourite = (name) => {
    toast(`${name} saved`);
  };

  return (
    <div className="py-4 mb-32">
      <h1 className=" font-semibold capitalize">{product?.name}</h1>
      <p className="text-xs uppercase text-gray-500 mb-1  ">
        {product?.category}
      </p>

      <h1 className=" font-semibold capitalize mb-1">${product?.price}</h1>
      <div className="   justify-center overflow-hidden flex gap-3">
        <div className=" w-[80%] ">
          <div>
            <img
              className=" rounded-xl bg-gray-200 object-cover h-80 w-full "
              src={product?.images[imagePreview]}
              alt=""
            />
          </div>
        </div>
        <div className=" grid ">
          {product?.images.map((image, index) => {
            return (
              <img
                onClick={() => setImagePreview(index)}
                key={index}
                className={`${
                  index === imagePreview ? " border-2 border-emerald-600" : ""
                } object-cover rounded-xl w-20 aspect-square  bg-gray-200`}
                src={image}
                alt=""
              />
            );
          })}
        </div>
      </div>

      <p className=" text-gray-700 mt-2 text-sm">{product?.desc}</p>

      <div className=" flex items-center gap-3 mt-2">
        <button
          onClick={() => handleQuantity("add")}
          className=" rounded-md  bg-emerald-500 border-emerald-500 text-white font-medium text-sm   flex justify-center items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <span className=" text-sm font-medium">{quantity}</span>
        <button
          onClick={() => handleQuantity("sub")}
          className=" rounded-md  text-emerald-500 border border-emerald-500 font-medium text-sm   flex justify-center items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className=" flex justify-between my-4">
        <button
          onClick={() => addToCart({ ...product, quantity })}
          className="bg-emerald-600 py-2 rounded-xl justify-center border border-emerald-600   w-[47%] text-center text-white text-sm flex gap-1 items-center"
        >
          Add to cart
          <span>
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
          </span>
        </button>
        <button
          onClick={() => favourite(product?.name)}
          className="text-emerald-600 py-2 rounded-xl justify-center  w-[47%] text-center border border-emerald-600 bg-white text-sm flex gap-1 items-center"
        >
          Favourite
          <span>
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </span>
        </button>
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
