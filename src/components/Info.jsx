import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const data = [
  {
    icon: <MdLocalShipping size={25} color="blue" />,
    heading: "Free Shipping",
    text: "We offer free shipping on special products",
  },
  {
    icon: <FaCreditCard size={25} color="green" />,
    heading: "Secure Payment",
    text: "Make secure payment for your product.",
  },
  {
    icon: <BsCartCheckFill size={25} color="red" />,
    heading: "Quality Products",
    text: "We sell products from only tested and proven brands.",
  },
  {
    icon: <BiSupport size={25} color="purple" />,
    heading: "24/7 Support",
    text: "Get access to support from our exprt support team.",
  },
];

const Info = () => {
  return (
    <section className=" w-[90%] py-14 lg:w-[80%] mx-auto flex flex-col gap-8 lg:flex-row justify-evenly items-center">
      {data.map((info, index) => {
        const { icon, heading, text } = info;
        return (
          <div key={index} className=" w-full border p-3 shadow flex gap-4">
            <div className="">{icon}</div>
            <div className="">
              <h4 className=" text-lg lg:text-xl font-semibold">{heading}</h4>
              <p className=" text-xs">{text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Info;
