import React, { useState } from "react";
import { productData } from "../data";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const handleChange = (ev) => {
    ev.preventDefault();
    const searchTerm = ev.target.value;
    setSearch(searchTerm);

    const search = productData.filter((product) =>
      product.category.includes(searchTerm.toLowerCase())
    );

    setProducts(search);
  };
  return (
    <div className="">
      <div className="w-[90%] mx-auto mb-32">
        <header className="flex items-center sticky top-0 gap-2  z-40 bg-white    py-3">
          <span className=" lg:hidden" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </span>
          <form className=" w-full">
            <input
              className=" lowercases block lg:py-3 p-2 w-full bg-gray-100 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="eg shirts, shoes, jackets, hoodies..."
              required
              autoFocus
              onChange={(ev) => handleChange(ev)}
            />
          </form>
        </header>
        {search && products.length <= 0 && <p>Nothing found</p>}

        {search && products.length > 0 ? (
          <div className=" grid grid-cols-2 gap-4 md:grid-cols-3 m lg:grid-cols-5">
            {products.map((product, index) => {
              const { images, name, price, id, category, desc, size } = product;
              return (
                <ProductCard
                  id={id}
                  productId={new Date().getTime().toString()}
                  image={images[0]}
                  name={name}
                  price={price}
                  description={desc}
                  size={size}
                  category={category}
                  quantity={1}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <h2 className=" italic  font-bold mb-2 lg:mb-4 lg:text-3xl">
              Search for Categories
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
