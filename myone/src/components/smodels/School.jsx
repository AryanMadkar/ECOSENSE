import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../../../public/school_building/Scene";

const School = () => {
  return (
    <div className=" overflow-hidden lg:h-[80vh] w-full h-[40vh] bg-black ">
      <Canvas
        className=""
        camera={{ position: [-30, 10, 27], fov: 70 }} // Moved camera back for better view
        style={{ touchAction: "none" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.4} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls
            enablePan={true} // Allow panning
            minDistance={30} // Prevent zooming too close
            maxDistance={120} // Prevent zooming too far
            maxPolarAngle={Math.PI / 2.2} // Restrict rotation to avoid going under the model
          />
        </Suspense>
      </Canvas>
      <div></div>
    </div>
  );
};

export default School;
