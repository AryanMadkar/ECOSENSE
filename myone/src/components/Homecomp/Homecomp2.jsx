import React from "react";
import electricity from "/videos/elect.mp4";
import data from "/images/DATA_img.jpg"
import process from "/images/proccess.jpg"
const Homecomp2 = () => {
  return (
    <div className="min-h-screen mt-4 rounded-3xl overflow-hidden shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]  w-full flex bg-black flex-col items-center justify-start">
      <video
        src={electricity}
        className="w-full mt-4 rounded-3xl h-auto max-w-[100%]  lg:max-w-[100%] object-cover"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="flex flex-col p-[2rem] text-center mt-10 w-full lg:w-full ">
        <div className="hero border-4 mb-4 rounded-3xl bg-black text-white min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={data}
              className="max-w-sm w-[100%] rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="hero border-4 mb-4 rounded-3xl bg-black min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={process}
              className="max-w-sm w-[100%] rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecomp2;
