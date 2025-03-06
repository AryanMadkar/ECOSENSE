import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo/withoutbg.png"
const Navbar = () => {
  const [shownav, setShownav] = useState(false);
  return (
    <nav className="sticky top-0 bg-black  z-[20] w-full p-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => {
            setShownav(!shownav);
          }}
          className="btn btn-square lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </button>
        <h1 className="text-white  font-bold text-4xl"><Link to={"/"}><img className="w-[10rem] lg:w-[9rem] h-auto" src={logo}/></Link></h1>
        <ul className="items-center hidden lg:flex lg:gap-4 justify-between">
          <li className="sea">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="sea">
            <Link to="/project" className="text-white hover:text-gray-300">
              Project
            </Link>
          </li>
          <li className="sea">
            <Link to="/process" className="text-white hover:text-gray-300">
              Process
            </Link>
          </li>
          <li className="sea">
            <Link to="/why" className="text-white hover:text-gray-300">
              Why?
            </Link>
          </li>
         
        </ul>
      </div>
      {shownav ? (
        <div className="h-[10rem] w-full mt-3 flex flex-col items-center justify-center">
          <ul className="items-center flex-col gap-[1rem]  h-full w-full  justify-between">
            <li className="sea">
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="sea">
              <Link to="/project" className="text-white hover:text-gray-300">
                Project
              </Link>
            </li>
            <li className="sea">
              <Link to="/process" className="text-white hover:text-gray-300">
                Process
              </Link>
            </li>
            <li className="sea">
              <Link to="/why" className="text-white hover:text-gray-300">
                Why?
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
