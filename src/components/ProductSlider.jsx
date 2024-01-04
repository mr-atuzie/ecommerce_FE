import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { productData } from "../data";
import { Link } from "react-router-dom";
import { shortenText } from "../utils";

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
                <img
                  className=" h-64 w-full object-cover"
                  src={imageurl}
                  alt=""
                />
                <p className=" mt-1 text-center text-sm text-red-600 font-medium">
                  {price}
                </p>
                <h4 className=" text-center ">{shortenText(name, 18)}</h4>
                <p className=" text-gray-500 text-sm">
                  {shortenText(description, 26)}
                </p>
              </Link>

              <button className=" mt-2 bg-red-600 text-white font-medium text-sm w-full py-2.5">
                Add To Cart
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
