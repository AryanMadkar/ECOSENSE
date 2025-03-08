
import React from 'react'
import { useGLTF } from '@react-three/drei'
export default function Model(props) {
  const { nodes, materials } = useGLTF('../../public/toilet_room_gltf/toilet.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_31.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_41.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_53.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_55.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_57.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_59.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_61.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_63.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_65.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_67.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_69.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_71.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_73.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_75.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_77.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_79.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_81.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_83.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_85.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_87.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_88.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_90.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_91.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_93.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_94.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_96.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_97.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_99.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_101.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_103.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_105.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_107.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_108.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_110.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_111.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_113.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_115.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_117.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_119.geometry} material={materials.normal_} />
      <mesh geometry={nodes.Object_121.geometry} material={materials.normal_} />
    </group>
  )
}

useGLTF.preload('/toilet.gltf')
