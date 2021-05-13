import './App.css'
import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Perf } from 'r3f-perf';
import { OrbitControls } from '@react-three/drei'

function Inspector() {
  window.app = useThree()

  return (
    <group />
  )
}

function App() {
  return (
    <div className="app">
      <div className="toolbar">
        <button>start</button>
      </div>

      <div className="canvas">
        <Canvas camera={{ position: [25, 25, 25] }}>
          <Perf />
          <Inspector />

          <OrbitControls />
          <axesHelper args={[100]} />
          <gridHelper args={[100, 10]} />
          <directionalLight position={[5, 5, 5]} color="red" />

          <mesh visible userData={{ hello: 'world' }} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <sphereGeometry args={[1, 1024, 1024]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </div>
  )
}

export default App
