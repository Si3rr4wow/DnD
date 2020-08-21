import React from 'react';

import { Canvas } from 'react-three-fiber'

import { Box, Something } from './three'

function App() {
  return (
    <div>
      <h1>threejs render test</h1>
      <Canvas colorManagement>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Something position={[3.6, 0, 0]}/>
      </Canvas>
    </div>
  );
}

export default App;
