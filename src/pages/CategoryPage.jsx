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
    <div className=" mt-6 mb-32">
      <h2 className=" text-lg capitalize font-bold mb-2 lg:text-2xl">
        {id}({products.length})
      </h2>

      <div className=" grid gap-4  lg:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products?.map((product, index) => {
          const { images, name, price, desc, id, size, category } = product;

          return (
            <ProductCard
              id={id}
              image={images[0]}
              name={name}
              price={price}
              description={desc}
              size={size}
              category={category}
              quantity={1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
