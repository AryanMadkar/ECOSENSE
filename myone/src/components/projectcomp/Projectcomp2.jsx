import React from "react";
import Floormodel from "../smodels/Floormodel";
import { Link } from "react-router-dom";

const Projectcomp2 = () => {
  return (
    <div className="hero bg-black min-h-screen w-full flex flex-col items-center justify-center px-4">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-8 w-full max-w-6xl">
        {/* 3D Model Container */}
        <div className="w-full border-b max-w-lg h-[400px] lg:h-[500px]">
          <Floormodel />
        </div>

        {/* Text Content */}
        <div className="text-white text-center lg:text-left px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-accent">
            Security Lab (SEC Lab)
          </h1>
          <p className="py-4 text-sm lg:text-base text-gray-300">
            The SEC Lab at **Atharva College of Engineering** is a dedicated
            space for **cybersecurity research and innovation**. Equipped with
            state-of-the-art infrastructure, it provides students with hands-on
            experience in **network security, ethical hacking, and digital
            forensics**. Our goal is to foster a secure digital future through
            research and learning.
          </p>
          <Link to="/">
            <button className="btn btn-primary px-6 py-2 text-lg">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projectcomp2;
