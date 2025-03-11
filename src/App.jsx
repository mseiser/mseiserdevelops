import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as THREE from 'three'


const App = () => {
  const [count, setCount] = useState(0)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('hsl(202, 9.60%, 22.50%)')
  return scene;
}

return (
  <>
    <div className="App">
    </div>
  </>
)


export default App
