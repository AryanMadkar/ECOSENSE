import React from "react";
import logo from "/images/logo/withoutbg.png";
import { FaArrowDown } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
const HOmecomp1 = () => {
  return (
    <div className="h-[67vh]  w-full relative bg-black flex flex-col lg:h-[80vh] items-center justify-between">
      <div className="absolute top-18 lg:top-0 flex flex-col lg:flex-row items-center justify-center">
        <img src={logo} className="h-auto   w-[110vw] lg:w-auto lg:h-[23rem] " />
        <h1>
          <IoLogoElectron className="text-[10rem] rotate text-purple-600 lg:text-[16rem]" />
        </h1>
      </div>
      <div className="flex flex-row items-center lg:px-[2rem] absolute bottom-2 left-2 lg:left-0 w-full justify-between">
        <div className="flex gap-2 text-sm flex-row  items-center justify-between w-[80%] lg:w-fit lg:gap-10">
          <h1>
            strategy Design
            <br />
            and Performance
          </h1>
          <h1>
            Two Engagement
            <br />
            Models:Cash or Equality
          </h1>
        </div>
        <button className=" hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default HOmecomp1;
