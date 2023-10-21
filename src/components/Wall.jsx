import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Wall(props) {
  const texture = useTexture("textures/lightmap.jpg");
  const { nodes, materials } = useGLTF("/models/wall.gltf");


  const TextureMaterial = new THREE.MeshStandardMaterial({
    map: null,
  })
  texture.flipY = false
  texture.encoding =  THREE.sRGBEncoding
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/models/wall.gltf");