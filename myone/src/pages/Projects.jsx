import React from "react";
import School from "../components/smodels/School";

const Projects = () => {
  return (
    <div className="hero  bg-base-200 min-h-screen">
      <div className="hero-content flex-col border-b lg:flex-row">
        <School/>
        <div>
          <h1 className="text-5xl font-bold">Atharva College Of Enginering </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
