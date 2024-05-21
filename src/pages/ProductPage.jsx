import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../data";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imagePreview, setImagePreview] = useState(0);

  useEffect(() => {
    const item = productData.find((product) => product.id === Number(id));
    setProduct(item);
  }, [id]);
  return (
    <div>
      <div className="  justify-center overflow-hidden flex gap-3">
        <div className=" w-[80%] ">
          <div>
            <img
              className=" rounded-xl object-cover h-80 w-full "
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
                className="object-cover rounded-xl w-20 aspect-square "
                src={image}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
