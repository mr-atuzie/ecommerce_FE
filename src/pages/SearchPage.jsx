import React, { useState } from "react";
import { productData } from "../data";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(null);
  // const navigate = useNavigate();

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
      <div className="w-full mx-auto mb-32">
        <header className="flex items-center gap-4 lg:gap-10 sticky top-0 justify-around  z-40 bg-white    py-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " text-emerald-500" : " text-gray-700"
            }
          >
            <div className=" flex flex-col justify-center gap-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
              </span>
              <p className=" text-[10px] lg:text-xs  tracking-wider">Store</p>
            </div>
          </NavLink>
          <form className=" w-full  ">
            <input
              className=" lowercases block  lg:py-3 p-2 w-full bg-gray-100 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Eg Shirts, Shoes, Jackets, Hoodies..."
              required
              autoFocus
              onChange={(ev) => handleChange(ev)}
            />
          </form>
        </header>

        {search && products.length > 0 ? (
          <div className=" grid grid-cols-2 gap-4 md:grid-cols-3 mt-3 lg:grid-cols-5">
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
        {search && products.length <= 0 && (
          <p className=" text-center text-sm lg:text-base">Nothing found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
