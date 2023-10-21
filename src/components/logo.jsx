import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Logo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/logo3D.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() =>{
    actions["LogoAction"].reset().play()
  },[])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Logo"
          rotation={[-Math.PI / 4, 0, -Math.PI / 2]}
          scale={[-0.2, -0.3, -0.2]}
        >
          <mesh
            name="Plane008"
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Plane008_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/logo3D.glb");