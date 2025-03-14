import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'


const RotatingBox = () => {

  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1,1,1]}/>
      <meshLambertMaterial color={0x02394A} emissive={0x02394A}/>

    </mesh>
  );
}

const App = () => {
  return (
    <>
    <Canvas camera={{position: [1,1,1]}}>
      <color attach="background" args={['lightblue']}/>
      <OrbitControls/>
      <directionalLight position={[0, -1, -1]} intensity={20}/>
      <RotatingBox/>
    </Canvas>
    </>
  );
}

  
export default App
  