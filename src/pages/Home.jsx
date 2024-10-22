import React from "react";
import ProductSlider from "../components/ProductSlider";
import { productData } from "../data";

const Home = () => {
  return (
    <>
      <div className=" mb-32 bg-gray-100">
        <ProductSlider
          heading={"Top Deals on Jackets"}
          products={productData.filter(
            (product) => product.category === "jackets"
          )}
        />

        <ProductSlider
          heading={"Top sneakers collection"}
          products={productData.filter(
            (product) => product.category === "shoes"
          )}
        />

        <ProductSlider
          heading={"Hoodies and sweatshirts"}
          products={productData.filter(
            (product) => product.category === "hoodies and sweatshirts"
          )}
        />

        <ProductSlider
          heading={"Best selling shirts"}
          products={productData.filter(
            (product) => product.category === "shirts"
          )}
        />

        <ProductSlider
          heading={"Mens Shorts"}
          products={productData.filter(
            (product) => product.category === "shorts"
          )}
        />

        <ProductSlider
          heading={"Best sellers for trousers"}
          products={productData.filter(
            (product) => product.category === "trousers"
          )}
        />
      </div>
    </>
  );
};

export default Home;
