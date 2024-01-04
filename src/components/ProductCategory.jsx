import React from "react";
// import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Iphones",
    image:
      "https://www.cnet.com/a/img/resize/e21b3371c11612c4e14928a6a237e7b0889745f8/hub/2023/09/12/2d9d37cc-7d99-4f81-8da2-8f3a674f4243/screenshot-2023-09-12-at-10-38-30-am.png?auto=webp&width=1200",
  },
  {
    id: 2,
    title: "Sneaaker",
    image: "https://i.ebayimg.com/images/g/GvgAAOSw-wJiXthR/s-l1200.webp",
  },
  {
    id: 3,
    title: "Women's fashion",
    image:
      "https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE=",
  },
  {
    id: 4,
    title: "Groceries",
    image:
      "https://assets-global.website-files.com/62d64ff33158a9a2aba96531/63f478fc4b38dd5ea9182d0f_Aldi%E2%80%99s%20Success%20Highlights%20Growing%20Demand%20for%20Value%20Groceries%20.jpg",
  },
  {
    id: 5,
    title: "Computer's",
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-Platinum-FY24HOL?wid=834&hei=470&fit=crop",
  },
  {
    id: 6,
    title: "Iphones",
    image:
      "https://www.cnet.com/a/img/resize/e21b3371c11612c4e14928a6a237e7b0889745f8/hub/2023/09/12/2d9d37cc-7d99-4f81-8da2-8f3a674f4243/screenshot-2023-09-12-at-10-38-30-am.png?auto=webp&width=1200",
  },
  {
    id: 7,
    title: "Sneaaker",
    image: "https://i.ebayimg.com/images/g/GvgAAOSw-wJiXthR/s-l1200.webp",
  },
  {
    id: 8,
    title: "Women's fashion",
    image:
      "https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE=",
  },
  {
    id: 9,
    title: "Groceries",
    image:
      "https://assets-global.website-files.com/62d64ff33158a9a2aba96531/63f478fc4b38dd5ea9182d0f_Aldi%E2%80%99s%20Success%20Highlights%20Growing%20Demand%20for%20Value%20Groceries%20.jpg",
  },
  {
    id: 10,
    title: "Computer's",
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-Platinum-FY24HOL?wid=834&hei=470&fit=crop",
  },
];

const ProductCategory = () => {
  // const navigate = useNavigate();
  return (
    <div className=" w-[90%] py-14 lg:w-[80%] mx-auto ">
      <h2 className=" text-3xl font-semibold mb-4">Categories</h2>

      <div className=" w-full grid grid-cols-6 gap-4">
        {categories.map((category) => {
          const { id, title, image } = category;
          return (
            <article key={id} className=" relative h-40 bg-white shadow-md">
              <h3 className=" absolute font-semibold mb-1 text-sm">{title}</h3>

              <img
                className="  w-full h-full  object-cover"
                src={image}
                alt={title}
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
