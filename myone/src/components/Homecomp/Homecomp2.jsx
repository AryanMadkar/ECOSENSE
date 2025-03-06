import React from "react";
import electricity from "/videos/elect.mp4";

const Homecomp2 = () => {
  return (
    <div className="min-h-screen rounded-3xl overflow-hidden shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]  w-full flex bg-black flex-col items-center justify-start">
      <video
        src={electricity}
        className="w-full h-auto max-w-[100%]  lg:max-w-[100%] object-cover"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="flex flex-col p-[2rem] text-center mt-10 w-full lg:w-full ">
        <div className="hero border-4 mb-4 rounded-3xl bg-black min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
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
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
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
