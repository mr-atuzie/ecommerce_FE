import React from "react";
import { productData } from "../data";
import CartItem from "../components/CartItem";

const CartPage = () => {
  return (
    <div className=" mb-32">
      {productData.slice(0, 9).map((product, index) => {
        const { images, name, price, id } = product;
        return (
          <CartItem
            id={id}
            imageurl={images[0]}
            name={name}
            price={price}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CartPage;
