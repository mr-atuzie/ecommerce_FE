import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { productData } from "../data";
import { Link } from "react-router-dom";
import { shortenText } from "../utils";
import ProductCard from "./ProductCard";

const ProductSlider = ({ heading }) => {
  return (
    <>
      <div className=" mb-3">
        <h2 className=" text-xl lg:text-2xl font-bold">{heading}</h2>
      </div>
      {/* desktop */}
      <div className=" hidden lg:block">
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

      {/* mobile */}
      <div className=" block lg:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {productData.map((slide, index) => {
            const { images, name, price, desc } = slide;
            return (
              <SwiperSlide key={index}>
                <ProductCard
                  imageurl={images[0]}
                  name={name}
                  price={price}
                  description={desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ProductSlider;
