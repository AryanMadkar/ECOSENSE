import React from "react";

import HOmecomp1 from "../components/Homecomp/HOmecomp1";
import Homecomp2 from '../components/Homecomp/Homecomp2'
import Homecomp3 from "../components/Homecomp/Homecomp3";
import Homecomp4 from "../components/Homecomp/Homecomp4";
const Home = () => {
  return (
    <div className="bg-black">
      <HOmecomp1/>
      <Homecomp2/>
      <Homecomp4/>
      <Homecomp3/>
    </div>
  );
};

export default Home;
