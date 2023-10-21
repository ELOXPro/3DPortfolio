import { Suspense, useState } from "react"
import { motion } from 'framer-motion-3d';

import { Avatar } from "./Avatar";
import { Wall } from './Wall';
import { Logo } from './logo';
import { useFrame, useThree} from '@react-three/fiber';
import { animate, useMotionValue } from 'framer-motion';
import {useEffect} from 'react'
import {FramerMotionConfig} from "../config";
import { useScroll } from "@react-three/drei";
import { Projects } from "./Projects";
import { Background } from "./Background";


export const Experience = (props) => {
  const {menuOpened} =props;
  const {viewport} = useThree();
  const [section, setSection] = useState(0);
  const data = useScroll();
  const isMobile = window.innerWidth < 768;

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(()=>{
    animate(cameraPositionX, menuOpened? -7: 2, {...FramerMotionConfig});
    animate(cameraLookAtX, menuOpened? 0: 0,{...FramerMotionConfig});
  }, [menuOpened])

  const [characterAnimation, setCharacterAnimation] = useState("leaning");

  useEffect(() => {
      setCharacterAnimation(section === 0 ? "leaning" : section === 1 ? "skills" : section === 2 ? "about" : section === 3 ? "projects" : section === 4 ? "contactme" : "contactme");
  }, [section]);

  useFrame((state)=>{

    const curSection = Math.floor(data.scroll.current * data.pages);

    if(curSection !== section){
      setSection(curSection);
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(),0,0);

  })

  return (
    <>
    <Background/>
    <ambientLight intensity={0.7} />
      <motion.group position={[isMobile? 0.05: 2.5, isMobile? -1.15 : -1, 0]} rotation ={[0,-6.95,0]}
        animate={""+section}
        transition={{
          duration: 0.7,
          ease: [0.6, 0.05, -0.01, 0.9],}}
        variants={{
          0: {
            scale: isMobile? 0.5: 1,
            y: isMobile? -1.65: -1,
            rotateY: isMobile? -7: -6.95,
            x: isMobile? 0.6: 2.5,
          },
          1: {
            scale: isMobile? 1: 1.4,
            y: isMobile? -1.65: -1.5,
            rotateY: isMobile? 0: 0,
            x: isMobile? 0.6: 1.4,
          },
          2: {
            scale: isMobile? 0.8: 1,
            y: isMobile? -1: -1,
            rotateY: isMobile? 0: 0,
            x: isMobile? 0.85: 1.8,
          },
          3: {
            scale: isMobile? 1: 4,
            y: isMobile? -1.15: -6.5,
            rotateY: isMobile? -7: -6.95,
            x: isMobile? 0.8: 2.5,
          },
          4: {
            scale: isMobile? 2: 3,
            y: isMobile? -4: -4,
            rotateY: isMobile? 0: -6.95,
            x: isMobile? 0.8: 1,
          },
          5: {
            scale: isMobile? 2: 3,
            y: isMobile? -4: -4,
            rotateY: isMobile? 0: -6.95,
            x: isMobile? 0.8: 1,
          },
        }}
      >
        <Suspense fallback={null}>
          <Avatar animation={characterAnimation}/>
        </Suspense>
      </motion.group>
      <motion.group position={[isMobile? 0.05: 1.5, isMobile? -1.15 : 0, 0]}
        animate={{
          scale: section === 0 ? isMobile? 0.5: 1 : 0,
        }}
      >
        <Wall scale={0.5} rotation ={[0,-6.95,0]}/>
        <Logo scale={0.5}/>
      
      </motion.group>
      <motion.group position={[-3, 1, 0]}
      animate={{
        scale: section === 3 && !menuOpened ? isMobile? 0.7: 2 : 0,
        x: section === 3 && !menuOpened ? isMobile? -1 : -3.4 : -3.4,
      }}
      >
      <Projects/>
      </motion.group>
    </>
  );
};
