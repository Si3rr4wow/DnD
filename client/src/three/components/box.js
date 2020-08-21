import React, { useState, useRef } from 'react';

import { useFrame } from 'react-three-fiber'

const Box = props => {
  const [state, setState] = useState({
    active: false,
    hovered: false
  })

  const mesh = useRef()

  useFrame(() => {
    return mesh.current.rotation.x
      = mesh.current.rotation.y
      += 0.05;
  })

  const handleClick = () => {
    setState(s => ({
      ...s,
      active: !s.active
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

  const scale = state.active ? [1.5, 1.5, 1.5] : [1, 1, 1]
  const color = state.hovered ? 'hotpink' : 'orange'

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut} >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

export default Box
