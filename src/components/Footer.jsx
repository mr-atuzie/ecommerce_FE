import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className=" text-sm  bg-black text-gray-500">
      <div className=" h-[40vh]  w-[90%] lg:w-[80%] mx-auto flex justify-around items-center">
        <div className=" w-full flex justify-between">
          <div>
            <h1 className=" font-semibold text-white  uppercase mb-2">
              Get to know us
            </h1>

            <p className=" text-gray-400 text-sm capitalize mb-1">home</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">service</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">product</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">News</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">contact</p>
          </div>

          <div>
            <h1 className=" font-semibold text-white  uppercase mb-2">
              Make Money With us
            </h1>

            <p className=" text-gray-400 text-sm capitalize mb-1">home</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">service</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">product</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">News</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">contact</p>
          </div>

          <div>
            <h1 className=" font-semibold text-white  uppercase mb-2">
              Payment methods
            </h1>

            <p className=" text-gray-400 text-sm capitalize mb-1">home</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">service</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">contact</p>
          </div>

          <div>
            <h1 className=" font-semibold text-white  uppercase mb-2">
              Let us help you
            </h1>

            <p className=" text-gray-400 text-sm capitalize mb-1">home</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">service</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">product</p>
          </div>

          <div>
            <h1 className=" font-semibold text-white  uppercase mb-2">
              Support
            </h1>

            <p className=" text-gray-400 text-sm capitalize mb-1">home</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">service</p>
            <p className=" text-gray-400 text-sm capitalize mb-1">product</p>
          </div>
        </div>
      </div>
      <hr className=" border border-gray-800" />
      <p className=" text-center text-sm py-3">
        &copy; {year} All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
