import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { productData } from "../data";
import { Link } from "react-router-dom";
import { shortenText } from "../utils";
import { FaRegHeart } from "react-icons/fa";

const ProductSlider = () => {
  return (
    <div className="  w-[90%]  lg:w-[80%] mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {productData.map((slide, index) => {
          const { imageurl, name, price, description } = slide;
          return (
            <SwiperSlide key={index}>
              <Link to={"/"}>
                <div className=" h-60 relative">
                  <img
                    className=" h-full w-full object-cover"
                    src={imageurl}
                    alt=""
                  />

                  <div className=" w-7 h-7 flex items-center justify-center bg-white rounded-full absolute top-2 right-2">
                    <FaRegHeart />
                  </div>
                </div>

                <div className=" mt-2">
                  <h4 className=" font-semibold ">{shortenText(name, 18)}</h4>
                  <p className=" text-gray-600 text-sm">
                    {shortenText(description, 26)}
                  </p>
                  <p className=" font-semibold">AED{price}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
