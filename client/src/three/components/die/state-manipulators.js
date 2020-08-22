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

export const applyRotation = (mesh, setState) => {
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

export const applyScaling = (mesh, state) => {
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
