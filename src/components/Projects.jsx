import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: 'Castelo Platform',
    description: 'A web app that customize the colors on Shoes',
    image: 'projects/castelo.png',
    url: "https://castelo.netlify.app/",
  },
  {
    title: 'Simple Portfolio',
    description: 'A Simple Website Portfolio ',
    image: 'projects/portifolio1.png',
    url: "https://eloxproject1.netlify.app/",
  },
  {
    title: '3D Endless Runner',
    description: 'A 3D Simple Video Game of an Endless Runner',
    image: 'projects/rfl.png',
    url: "https://eloxpro.itch.io/3d-runner-demo",
  },
  {
    title: 'OnPost Platform',
    description: 'A Simple Clone Of Instagram Home Page',
    image: 'projects/onpost.png',
    url: "https://onpost.netlify.app/",
  },
  ]


  const Project = (props) => {
    const { project, highlighted } = props;
  
    const background = useRef();
    const bgOpacity = useMotionValue(0.4);
  
    useEffect(() => {
      animate(bgOpacity, highlighted ? 0.7 : 0.4);
    }, [highlighted]);
  
    useFrame(() => {
      background.current.material.opacity = bgOpacity.get();
    });
  
    return (
      <group {...props}>
        <mesh
          position-z={-0.001}
          onClick={() => project.url != null ? window.open(project.url, "_blank"): alert("Project Still in Development Check My Social Media Accounts To Be Updated.")}
          ref={background}
        >
          <planeGeometry args={[2.2, 2]} />
          <meshBasicMaterial color="black" transparent opacity={0.4} />
        </mesh>
        <Image
          scale={[2, 1.2, 1]}
          url={project.image}
          toneMapped={false}
          position-y={0.3}
        />
        <Text
          maxWidth={2}
          anchorX={"left"}
          anchorY={"top"}
          fontSize={0.2}
          position={[-1, -0.4, 0]}
        >
          {project.title.toUpperCase()}
        </Text>
        <Text
          maxWidth={2}
          anchorX="left"
          anchorY="top"
          fontSize={0.1}
          position={[-1, -0.6, 0]}
        >
          {project.description}
        </Text>
        
      </group>
    );
  };
  
  export const currentProjectAtom = atom(Math.floor(projects.length / 2));
  
  export const Projects = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);
  
    return (
      <group>
        <group>
          
        </group>
        {projects.map((project, index) => (
          <motion.group
            key={"project_" + index}
            position={[index * 2.5, 0, -3]}
            animate={{
              x: 0 + (index - currentProject) * 2.5,
              y: currentProject === index ? 0 : 1,
              z: currentProject === index ? -2 : -3,
              rotateX: currentProject === index ? 0 : -1,
              rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
            }}
          >
            <Project project={project} highlighted={index === currentProject} />
          </motion.group>
        ))}
      </group>
    );
  };
  
