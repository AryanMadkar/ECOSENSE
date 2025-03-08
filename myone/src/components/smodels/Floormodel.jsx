import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Flor from "../../../public/floor1/Flor";

const Floormodel = () => {
  return (
    <Canvas
      className="bg-black"
      camera={{ position: [10, 10, 10], fov: 14 }}
      shadows
    >
      <Suspense fallback={null}>
        {/* Lighting Setup */}
        <ambientLight intensity={1.7} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} castShadow />
        <pointLight position={[-5, 5, 5]} intensity={0.6} />

        {/* Camera Controls */}
        <OrbitControls
          enablePan={true}
          enableDamping={true}
          enableZoom={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />

        {/* 3D Model */}
        <Flor />
      </Suspense>
    </Canvas>
  );
};

export default Floormodel;
