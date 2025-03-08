import React, { useRef, useState } from "react";
import School from "../smodels/School";
import { Link } from "react-router-dom";

const Projectcomp1 = () => {
  const [movepose, setMovepose] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMovepose({ x: clientX, y: clientY });

    if (divRef.current) {
      let { left, right, top, bottom } = divRef.current.getBoundingClientRect();
      let inside =
        clientX >= left &&
        clientX <= right &&
        clientY >= top &&
        clientY <= bottom;

      setIsInside(inside);
    }
  };

  return (
    <div
      className="hero bg-black min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4"
      onMouseMove={handleMouseMove} // ✅ Tracks mouse movement
    >
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 w-full max-w-6xl">
        {/* 3D Model Section */}
        <div
          ref={divRef}
          className="flex relative justify-center border-b w-full"
        >
          {/* Moves dynamically with mouse inside div */}
          {isInside && (
            <div
              className="absolute z-10 text-white text-xl hidden lg:block  font-bold pointer-events-none"
              style={{
                position: "absolute",
                left: `${movepose.x}px`,
                top: `${movepose.y}px`,
                background: "rgba(255, 0, 0, 0.2)",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              press and move 
            </div>
          )}
          <School />
        </div>

        {/* Text Section */}
        <div className="space-y-6 w-full text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-accent">
            Atharva College Of Engineering
          </h1>

          <p className="text-lg text-gray-200 font-semibold leading-relaxed">
            Atharva College of Engineering is an educational institution located
            in Malad West, Mumbai, Maharashtra, India. The college is known for
            its active participation in various academic and extracurricular
            activities.
          </p>

          {/* Events List */}
          <ul className="space-y-4 text-gray-100 font-semibold text-left">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              Organized the international conference ICSTEMSD-2023 on Science,
              Technology, Engineering, and Mathematics for Sustainable
              Development.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              Hosted the annual technical fest ACE IEEE Techithon 2022 with the
              theme
              <span className="italic"> "Alchemia- A Decade of Upgrade."</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              IETE SF of Atharva College organized a webinar on
              <span className="font-semibold">
                {" "}
                "Network and Security Landscape: Current Technologies and How to
                Become a White-Hat Hacker."
              </span>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <Link to="https://atharvacoe.ac.in/">
              <button className="btn btn-primary btn-wide shadow-md transition hover:scale-105">
                Visit Website
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectcomp1;
