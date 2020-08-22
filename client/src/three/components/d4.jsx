import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const acceleration = 0.001

const isStationaryWithImpulse = state => (
  state.accelerating === true &&
  state.spinAcceleration === 0
)

const isStillAccelerating = state => (
  state.spinAcceleration > -0.15 &&
  state.spinAcceleration < 0.15 &&
  state.accelerating === true
)

const isInStopRegion = state => (
  state.spinAcceleration > -0.002 &&
  state.spinAcceleration < 0.002
)

const applyRotation = (mesh, setState) => {
  setState(s => {
    let nextSpinAcceleration
    let nextAccelerating = s.accelerating
    if(isStationaryWithImpulse(s)) {
      nextSpinAcceleration = s.spinAcceleration + 4 * acceleration
    } else if(isStillAccelerating(s) && !isInStopRegion(s)) {
      nextSpinAcceleration = s.spinAcceleration + acceleration
    } else if(isInStopRegion(s)) {
      nextSpinAcceleration = 0
    } else {
      nextSpinAcceleration = s.spinAcceleration - acceleration
      nextAccelerating = false
    }

    if(nextSpinAcceleration) {
      mesh.current.rotation.x = (
        mesh.current.rotation.y
      ) += nextSpinAcceleration
    }
    return {
      ...s,
      accelerating: nextAccelerating,
      spinAcceleration: nextSpinAcceleration
    }
  })
}

const applyScaling = (mesh, state) => {
  if(state.hovered && mesh.current.scale.length() < 1.2) {
    mesh.current.scale.x =
    mesh.current.scale.y =
    mesh.current.scale.z += 0.03
  }
  else if(!state.hovered && mesh.current.scale.length() > 1) {
    mesh.current.scale.x =
    mesh.current.scale.y =
    mesh.current.scale.z -= 0.03
  }
}

const D4 = props => {
  const [state, setState] = useState({
    hovered: false,
    spinAcceleration: 0,
    accelerating: false
  })
  const { nodes } = useLoader(GLTFLoader, "models/d4.glb");
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
      geometry={nodes.Circle.geometry}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut} >
      <meshStandardMaterial
        attach="material"
        color={0x888888}
        roughness={0.7}
        metalness={0.3} />
    </mesh>
  );
}

export default D4
