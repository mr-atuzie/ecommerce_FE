import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../data";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const category = productData.filter((product) => product.category === id);
    setProducts(category);
  }, [id]);

  return (
    <div className=" mb-32">
      <h2 className=" text-lg capitalize font-bold mb-2 lg:text-2xl">
        {id}({products.length})
      </h2>

      <div className=" grid gap-4 grid-cols-2">
        {products?.map((product, index) => {
          const { images, name, price, desc, id } = product;

          return (
            <ProductCard
              key={index}
              id={id}
              imageurl={images[2]}
              name={name}
              price={price}
              description={desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;