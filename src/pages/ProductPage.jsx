import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../data";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const item = productData.find((product) => product.id === Number(id));
    setProduct(item);
  }, [id]);
  return <div>{product?.name}</div>;
};

export default ProductPage;
