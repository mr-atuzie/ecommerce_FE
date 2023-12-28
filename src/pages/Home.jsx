import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import ProductSlider from "../components/ProductSlider";

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <h2 className=" text-xl lg:text-2xl mt-6 mb-3  font-medium ">
          {heading}
        </h2>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <section className="">
        <PageHeading heading={"New Arrivals"} />
        <ProductSlider />
      </section>
      <section className="">
        <PageHeading heading={"Trending"} />
        <ProductSlider />
      </section>
    </>
  );
};

export default Home;
