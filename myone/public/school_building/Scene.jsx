import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/school_building/scene.gltf");
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y +=  delta * 0.5; // Rotate

    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.lambert21SG}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.lambert25SG}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.lambert35SG}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.lambert38SG}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.lambert42SG}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.lambert44SG}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.lambert47SG}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.lambert48SG}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.lambert51SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/school_building/scene.gltf");
