import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo/withoutbg.png"; // Ensure correct path
import { useTheme } from "../context/Context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [shownav, setShownav] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <nav className="sticky top-0 bg-black z-[20] w-full p-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setShownav(!shownav)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
          aria-expanded={shownav}
        >
          {shownav ? (
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          ) : (
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          )}
        </button>

        {/* Logo */}
        <Link to="/">
          <img className="w-[10rem] lg:w-[9rem] h-auto" src={logo} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:gap-4 items-center">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/project" className="text-white hover:text-gray-300">
              Project
            </Link>
          </li>
          <li>
            <Link to="/process" className="text-white hover:text-gray-300">
              Process
            </Link>
          </li>
          <li>
            <Link to="/why" className="text-white hover:text-gray-300">
              Why?
            </Link>
          </li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full focus:outline-none"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <svg
              className="h-10 w-10 fill-current text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Z" />
            </svg>
          ) : (
            <svg
              className="h-10 w-10 fill-current text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {shownav && (
        <div className="h-[10rem] w-full mt-3 flex flex-col items-center">
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" className="text-white hover:text-gray-300">
                Project
              </Link>
            </li>
            <li>
              <Link to="/process" className="text-white hover:text-gray-300">
                Process
              </Link>
            </li>
            <li>
              <Link to="/why" className="text-white hover:text-gray-300">
                Why?
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
