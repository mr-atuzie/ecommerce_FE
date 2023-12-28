import React from "react";
import { MdOutlineStars } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { LuTruck } from "react-icons/lu";

const data = [
  {
    icon: <MdOutlineStars size={30} />,
    heading: "High Quality",
    text: "We stock high quality pieces from your favourite name-brand",
  },
  {
    icon: <LuTruck size={30} />,
    heading: "Fast and Reliable",
    text: "Your orders gets to you just in time.",
  },
  {
    icon: <FaRegCommentDots size={30} />,
    heading: "Customer Service",
    text: "We are here to listen if you need to talk to us.",
  },
];

const Info = () => {
  return (
    <section className="">
      <div className="w-[90%]  lg:w-[80%] mx-auto ">
        <div className=" flex justify-around items-center">
          {data.map((info, index) => {
            const { icon, heading, text } = info;
            return (
              <div
                key={index}
                className=" w-full flex flex-col  items-center justify-center"
              >
                <div>{icon}</div>

                <h4 className=" text-lg lg:text-xl font-medium mt-3">
                  {heading}
                </h4>
                <p className=" text-center  max-w-sm text-sm  text-gray-500">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
        <hr className=" border border-gray-500 mt-4" />
      </div>
    </section>
  );
};

export default Info;
