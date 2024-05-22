import React from "react";

const SearchPage = () => {
  const handleChange = (ev) => {
    ev.preventDefault();
    const searchTerm = ev.target.value;
    console.log(searchTerm);
  };
  return (
    <div>
      <header className="flex items-center sticky top-0 gap-2 w-[95%] mx-auto z-40 bg-white   py-3">
        <form className=" w-full">
          <input
            className=" block p-2 w-full bg-gray-100 border rounded-xl placeholder:text-sm placeholder:font-light"
            type="text"
            placeholder="Search for product"
            required
            autoFocus
            onChange={(ev) => handleChange(ev)}
          />
        </form>
      </header>
    </div>
  );
};

export default SearchPage;
