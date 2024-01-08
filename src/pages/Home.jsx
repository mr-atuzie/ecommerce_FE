import React from "react";
import Slider from "../components/Slider";
// import Info from "../components/Info";
import ProductSlider from "../components/ProductSlider";
import ProductCategory from "../components/ProductCategory";
import SocialMediaLinks from "../components/SocialMediaLinks";

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="w-[90%] lg:w-[80%] mx-auto mb-4">
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
      <Slider />
      <section className=" py-14">
        <PageHeading heading={"Latest Products"} btnText={"Shop Now>>>"} />
        <ProductSlider />
      </section>
      <section className=" bg-gray-200">
        <ProductCategory />
      </section>
      <section className=" py-14">
        <PageHeading heading={"Mobile Phones"} btnText={"Shop Now>>>"} />
        <ProductSlider />
      </section>
      <section className=" py-14">
        <PageHeading heading={"Men's Fashion"} btnText={"Shop Now>>>"} />
        <ProductSlider />
      </section>
      <SocialMediaLinks />
    </>
  );
};

export default Home;
