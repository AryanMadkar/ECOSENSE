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
        <h1 className="text-4xl lg:text-5xl font-bold">Sec Lab</h1>
        <p className="py-4 text-sm lg:text-base">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
          a id nisi.
        </p>
        <Link to="/">
          <button className="btn btn-primary px-6 py-2 text-lg">Get Started</button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Projectcomp2;
