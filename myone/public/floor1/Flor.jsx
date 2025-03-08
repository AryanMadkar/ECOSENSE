import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Flor(props) {
  const { nodes, materials } = useGLTF("/floor1/flor.gltf");

  return (
    <group {...props} dispose={null}>
      {Object.entries(nodes).map(([key, node]) => (
        <mesh
          key={key}
          geometry={node.geometry}
          material={materials[node.material?.name]}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/floor1/flor.gltf");
