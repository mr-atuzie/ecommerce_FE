import React from "react";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className=" w-full h-[70vh]">
      <div className="w-[90%] lg:w-[80%] py-4 mx-auto">
        <div className=" flex justify-around items-center">
          <div className=" max-w-lg relative  ">
            <h2 className="  text-center text-4xl font-semibold">
              You don't have to break <br /> the bank to look good
            </h2>
            <p className=" text-center text-lg font-light text-gray-600 my-4">
              Fashion rental made easy
            </p>
            <div className=" w-full flex justify-center items-center">
              <button className=" bg-pink-400  p-2.5 rounded-lg">
                Rent now
              </button>
            </div>

            <div className=" w-[400px] h-[400px] bg-pink-100 -z-10 rounded-full absolute -top-24"></div>
          </div>
          <img className=" w-[400px]" src={heroImg} alt="" />
        </div>
        <hr className=" border border-gray-500 mt-4" />
      </div>
    </div>
  );
};

export default Hero;
