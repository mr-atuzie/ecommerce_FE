import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import ProductCard from "./ProductCard";

const ProductSlider = ({ heading, products }) => {
  console.log({
    heading,
    products,
  });
  return (
    <>
      <div className=" bg-white py-5 mb-6">
        <div className=" flex justify-between">
          <h2 className=" text-lg capitalize font-bold mb-2 lg:text-2xl">
            {heading}
          </h2>

          <button className=" bg-transparent items-center text-xs flex gap-1 text-gray-400">
            View more
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* desktop */}
        {/* <div className=" hidden lg:block">
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
      </div> */}

        {/* mobile */}
        <div className=" block lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={2.3}
            spaceBetween={15}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
          >
            {products?.map((product, index) => {
              const { images, name, price, desc } = product;

              return (
                <SwiperSlide key={index}>
                  <ProductCard
                    imageurl={images[1]}
                    name={name}
                    price={price}
                    description={desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
