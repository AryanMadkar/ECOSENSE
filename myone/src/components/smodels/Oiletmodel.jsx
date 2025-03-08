import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Color } from "three";
import Toilet from "../../../public/toilet_room_gltf/Toilet";

const Oiletmodel = () => {
  return (
    <Canvas camera={{ position: [-24, 10, -26], fov: 14 }} shadows>
      <Suspense fallback={null}>
        {/* Ambient Lighting */}
        <ambientLight intensity={1.2} />

        {/* Directional Light (Main Source) */}
        <directionalLight position={[5, 15, 5]} intensity={1.5} castShadow />

        {/* Point Light for Soft Fill */}
        <pointLight position={[0, 10, 10]} intensity={0.8} />

        {/* Spot Light for Directional Focus */}
        <spotLight
          position={[10, 20, 10]}
          angle={0.3}
          intensity={1.2}
          castShadow
        />

        {/* Camera Controls */}
        <OrbitControls
          enablePan={true}
          enableDamping={true}
          enableZoom={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />

        {/* 3D Model */}
        <Toilet />
      </Suspense>
    </Canvas>
  );
};

// Set Black Background


export default Oiletmodel;


