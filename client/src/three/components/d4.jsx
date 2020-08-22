import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const D4 = props => {
  const { nodes } = useLoader(GLTFLoader, "models/d4.glb");

  const mesh = useRef()

  useFrame(() => {
    if(!mesh.current) { return }
    return mesh.current.rotation.x
      = mesh.current.rotation.y
      += 0.05;
  })

  return (
    <mesh visible
      {...props}
      ref={mesh}
      geometry={nodes.Circle.geometry}>
      <meshStandardMaterial
        attach="material"
        color="white"
        roughness={0.3}
        metalness={0.3}
      />
    </mesh>
  );
}

export default D4
