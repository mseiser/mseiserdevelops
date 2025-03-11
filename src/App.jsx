import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <>
    <Canvas camera={{position: [3,3,3]}}>
      <color attach="background" args={['lightblue']}/>
      <OrbitControls/>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial/>
      </mesh>

    </Canvas>
    </>
  );
}

  
export default App
  