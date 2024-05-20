import React from "react";
import ProductSlider from "../components/ProductSlider";

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div>
        <div className="  flex justify-between items-center w-full">
          <h2 className=" text-xl lg:text-2xl font-extralight">{heading}</h2>

          <button className=" bg-gray-200 text-xs lg:text-sm p-1.5 font-medium">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <section className=" ">
        <PageHeading heading={"Latest Products"} btnText={"Shop Now>>>"} />
        <ProductSlider />
      </section>
    </>
  );
};

export default Home;
