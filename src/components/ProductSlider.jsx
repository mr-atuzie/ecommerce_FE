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
      <div className=" mb-6">
        <h2 className=" text-lg tracking-wide uppercase lg:text-2xl font-semibold">
          {heading}
        </h2>
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
            slidesPerView={2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {products?.map((product, index) => {
              const { images, name, price, desc } = product;

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
      </div>
    </>
  );
};

export default ProductSlider;
