import React from "react";
import { sliderData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-[80vh] mx-auto flex relative ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {sliderData.map((slide, index) => {
          const { image, heading, desc } = slide;
          return (
            <SwiperSlide key={index}>
              <img className=" w-full h-full object-cover" src={image} alt="" />

              <div className=" absolute z-20 bg-black/15 top-0 w-full left-0 h-full flex justify-center items-center">
                <div className=" bg-black/70 p-5 flex flex-col justify-center items-center lg:w-[500px]">
                  <h2 className=" text-white font-bold text-4xl">{heading}</h2>
                  <p className=" text-gray-100 text-sm ">{desc}</p>

                  <hr className=" border border-gray-200 w-32 my-4" />

                  <button
                    className=" bg-red-600 p-2 rounded text-white"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
