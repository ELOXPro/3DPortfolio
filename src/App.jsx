import { Experience } from "./components/Experience";
import { Scroll, ScrollControls,AccumulativeShadows, RandomizedLight, Sky } from '@react-three/drei';
import { Interface } from './components/Interface';
import { Background }from './components/Background';
import { Canvas} from '@react-three/fiber'
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig} from "framer-motion";
import { FramerMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";
import { LoadingScreen } from "./components/Loading Screen";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);


  return (
    <>
    <LoadingScreen started={started} setStarted={setStarted}/>
    <MotionConfig transition ={{...FramerMotionConfig}}>
    <Canvas shadows ="soft" camera={{fov:"42"}}>
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <RandomizedLight amount={3} radius={10} ambient={0.5} position={[1, 5, -1]} />
      <ScrollControls pages={5} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection}/>
        <Experience section={section} menuOpened={menuOpened}/>
        <Scroll html>
          <Interface setSection={setSection}/>
        </Scroll>
      </ScrollControls>
  </Canvas>
  <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
  <Cursor/>
  </MotionConfig>
  </>
  );
}

export default App;
