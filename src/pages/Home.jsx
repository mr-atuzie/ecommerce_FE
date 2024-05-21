import React from "react";
import ProductSlider from "../components/ProductSlider";
import { productData } from "../data";

const Home = () => {
  return (
    <>
      <div className=" mb-32">
        <ProductSlider
          heading={"Jackets"}
          products={productData.filter(
            (product) => product.category === "Jackets"
          )}
        />

        <ProductSlider
          heading={"shoes"}
          products={productData.filter(
            (product) => product.category === "shoes"
          )}
        />

        <ProductSlider
          heading={"shirts"}
          products={productData.filter(
            (product) => product.category === "shirts"
          )}
        />

        <ProductSlider
          heading={"trousers"}
          products={productData.filter(
            (product) => product.category === "shirts"
          )}
        />
      </div>
    </>
  );
};

export default Home;
