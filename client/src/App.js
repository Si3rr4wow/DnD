import React, { Suspense } from 'react';

import { Canvas } from 'react-three-fiber'

import { Die, Loading } from './three'

function App() {
  return (
    <>
      <h1>threejs render test</h1>
      <div style={{ height: '75%' }}>
        <Canvas colorManagement style={{ background: "#171717" }}>
          <ambientLight intensity={0.005}/>
          <pointLight position={[-20, 20, 10]} intensity={2} color={0x81f7f7}/>
          <pointLight position={[20, 20, 10]} intensity={2} color={0xf781c2}/>
          <Suspense fallback={Loading}>
            <Die modelPath="models/d4.glb" position={[-3, 0, 0]}/>
            <Die modelPath="models/d6.glb" position={[-1, 0, 0]}/>
            <Die modelPath="models/d12.glb" position={[+1, 0, 0]}/>
            <Die modelPath="models/d20.glb" position={[+3, 0, 0]}/>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
