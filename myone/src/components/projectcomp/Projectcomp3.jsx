import React from "react";
import Oiletmodel from "../smodels/Oiletmodel";
import { Link } from "react-router-dom";

const Projectcomp3 = () => {
  return (
    <div className="hero bg-black min-h-screen w-full flex flex-col items-center justify-center px-4">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-8 w-full max-w-6xl">
        {/* 3D Model Container */}
        <div className="w-full border-b max-w-lg h-[400px] lg:h-[500px]">
          <Oiletmodel />
        </div>

        {/* Text Content */}
        <div className="text-white text-center lg:text-left px-4">
          <h1 className="text-4xl lg:text-5xl font-bold">
            {" "}
            Smart Toilet Lighting System
          </h1>
          <p className="py-4 text-sm lg:text-base">
            This smart toilet lighting system automatically turns the lights
            **on** when someone enters and **off** when the room is empty,
            ensuring energy efficiency and convenience. Say goodbye to
            unnecessary electricity usage with our intelligent occupancy
            detection.
          </p>
          <Link to="/">
            <button className="btn btn-primary px-6 py-2 text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projectcomp3;
