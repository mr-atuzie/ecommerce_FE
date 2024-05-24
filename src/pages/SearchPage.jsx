import React, { useState } from "react";
import { productData } from "../data";
import SearchItem from "../components/SearchItem";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div className="w-[95%] mx-auto">
        <header className="flex items-center sticky top-0 gap-2  z-40 bg-white   py-3">
          <span onClick={() => navigate(-1)}>
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
              className=" lowercases block p-2 w-full bg-gray-100 border rounded-xl placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="shirts, shoes, jackets, hoodies..."
              required
              autoFocus
              onChange={(ev) => handleChange(ev)}
            />
          </form>
        </header>
        {search && products.length <= 0 && <p>Nothing found</p>}

        {search && products.length > 0 && (
          <div>
            {products.map((product, index) => {
              const { images, name, price, id, category } = product;
              return (
                <SearchItem
                  id={id}
                  imageurl={images[0]}
                  name={name}
                  price={price}
                  key={index}
                  category={category}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
