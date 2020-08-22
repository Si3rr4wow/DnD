import React, { Suspense } from 'react';

import { Canvas } from 'react-three-fiber'

import { Box, D4, Loading } from './three'

function App() {
  return (
    <>
      <h1>threejs render test</h1>
      <Canvas colorManagement style={{ background: "#171717" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={Loading}>
          <D4 position={[0, 0, 0]}/>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
