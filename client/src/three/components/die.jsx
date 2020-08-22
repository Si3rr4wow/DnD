import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { applyRotation, applyScaling } from './die/state-manipulators'

const Die = ({ modelPath, ...props }) => {
  const [state, setState] = useState({
    hovered: false,
    spinAcceleration: 0,
    accelerating: false
  })
  const { nodes } = useLoader(GLTFLoader, modelPath);
  const mesh = useRef()

  const handleClick = () => {
    setState(s => ({
      ...s,
      accelerating: true
    }))
  }

  const handlePointerOver = () => {
    setState(s => ({
      ...s,
      hovered: true
    }))
  }

  const handlePointerOut = () => {
    setState(s => ({
      ...s,
      hovered: false
    }))
  }

  useFrame(() => {
    if(!mesh.current) { return }
    applyRotation(mesh, setState)
    applyScaling(mesh, state)
  })

  return (
    <mesh visible
      {...props}
      ref={mesh}
      geometry={nodes.Default.geometry}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut} >
      <meshStandardMaterial
        attach="material"
        color={0x888888}
        roughness={0.0}
        metalness={0.3} />
    </mesh>
  );
}

export default Die
