import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductSlider = ({ heading, products, hide }) => {
  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  return (
    <>
      <div className=" bg-white py-5 lg:py-14 ">
        <div className=" flex items-center justify-between">
          <h2 className="  capitalize font-bold mb-2 lg:mb-4 lg:text-3xl">
            {heading}
          </h2>

          {!hide && (
            <Link
              to={`/category/${products[0]?.category}`}
              className=" bg-transparent items-center text-[10px] flex gap-1 text-gray-400"
            >
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
            </Link>
          )}
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
            {products?.map((product, index) => {
              const { images, name, price, desc, id, category, size } = product;

              // console.log(product.images);
              return (
                <SwiperSlide key={index}>
                  <ProductCard
                    id={id}
                    productId={makeid(10)}
                    image={images[0]}
                    name={name}
                    price={price}
                    description={desc}
                    size={size}
                    category={category}
                    quantity={1}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* mobile */}
        <div className=" block lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={2.2}
            spaceBetween={15}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
          >
            {products?.map((product, index) => {
              const { images, name, price, desc, category, size, id } = product;

              return (
                <SwiperSlide key={index}>
                  <ProductCard
                    id={id}
                    productId={makeid(10)}
                    image={images[0]}
                    name={name}
                    price={price}
                    description={desc}
                    size={size}
                    category={category}
                    quantity={1}
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
