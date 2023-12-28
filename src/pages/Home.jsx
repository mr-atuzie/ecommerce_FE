import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <h2 className=" text-xl lg:text-2xl font-light">{heading}</h2>

        <hr className=" border border-gray-300 my-2" />
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <PageHeading heading={"New Arrivals"} />
    </>
  );
};

export default Home;
