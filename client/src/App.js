import React, { Suspense } from 'react';

import { Canvas } from 'react-three-fiber'

import { Box, D4, Loading } from './three'

function App() {
  return (
    <>
      <h1>threejs render test</h1>
      <div style={{ height: '75%' }}>
        <Canvas colorManagement style={{ background: "#171717" }}>
          <ambientLight color={0xf7c481}/>
          <pointLight position={[-20, 0, 10]} intensity={2} color={0x81f7f7}/>
          <pointLight position={[20, 0, 10]} intensity={2} color={0xf781c2}/>
          <Suspense fallback={Loading}>
            <D4 position={[-4, 0, 0]}/>
            <D4 position={[-2, 0, 0]}/>
            <D4 position={[0, 0, 0]}/>
            <D4 position={[2, 0, 0]}/>
            <D4 position={[4, 0, 0]}/>

            <D4 position={[-4, 2, 0]}/>
            <D4 position={[-2, 2, 0]}/>
            <D4 position={[0, 2, 0]}/>
            <D4 position={[2, 2, 0]}/>
            <D4 position={[4, 2, 0]}/>

            <D4 position={[-4, -2, 0]}/>
            <D4 position={[-2, -2, 0]}/>
            <D4 position={[0, -2, 0]}/>
            <D4 position={[2, -2, 0]}/>
            <D4 position={[4, -2, 0]}/>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
