import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export const Background = () => {
  const material = useRef();
  const color = useRef({
    color: "rgba(0,20,100,1)",
  });
  const data = useScroll();

  const tl = useRef();

  useFrame(() => {
    tl.current.progress(data.scroll.current);
    material.current.color = new THREE.Color(color.current.color);
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      color: "rgba(10,0,50,1)",
    });
    tl.current.to(color.current, {
      color: "rgba(0,20,0,1)",
    });
    tl.current.to(color.current, {
      color: "rgba(200,150,100,1)",
    });
    tl.current.to(color.current, {
      color: "rgba(40,50,50,1)",
    });
  }, []);

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
