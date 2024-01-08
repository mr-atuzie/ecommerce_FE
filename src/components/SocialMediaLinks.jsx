import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className=" py-10 bg-black ">
      <div className=" w-[90%] h-full   lg:w-[80%] mx-auto flex flex-col gap-4 lg:gap-0 lg:flex-row items-center  justify-between">
        <div>
          <h2 className=" text-xl text-white font-bold">
            Shop<span className="text-red-600">iify</span>.
          </h2>
          <p className=" lg:max-w-sm text-gray-500 text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            id inventore eaque nemo?
          </p>
        </div>
        <div className=" flex">
          <div className=" h-10 bg-black/85 w-10 border-2 border-red-600 rounded-full flex items-center justify-center">
            <FaFacebookF color="white" />
          </div>
          <div className=" h-10 bg-black/85 w-10 border-2 border-red-600 rounded-full flex items-center justify-center">
            <FaTwitter color="white" />
          </div>
          <div className=" h-10 bg-black/85 w-10 border-2 border-red-600 rounded-full flex items-center justify-center">
            <FaInstagram color="white" />
          </div>
          <div className=" h-10 bg-black/85 w-10 border-2 border-red-600 rounded-full flex items-center justify-center">
            <FaYoutube color="white" />
          </div>
        </div>
        <div>
          <h2 className=" text-white text-3xl font-bold">Let's Talk</h2>
          <form>
            <div className=" py-1.5 mt-1  px-2.5 w-[300px] flex bg-white rounded items-center">
              <input
                type="search"
                id="default-search"
                className="block w-full  text-sm text-gray-900 bg-transparent    outline-none"
                placeholder=""
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
