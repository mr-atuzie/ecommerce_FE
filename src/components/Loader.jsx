import React from "react";
import ReactDOM from "react-dom";
import loaderImg from "../assets/loader.gif";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className=" w-full h-screen bg-black/90 fixed top-0 z-50 flex justify-center items-center">
      <div>
        <img width={40} src={loaderImg} alt="loading" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <img width={40} src={loaderImg} alt="loading" />
    </div>
  );
};

export default Loader;
