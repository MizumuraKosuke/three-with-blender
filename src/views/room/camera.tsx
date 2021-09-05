import { useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'

const Camera = () => {
  const camera = useRef()

  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault
      position={[ 0, 2, 10 ]}
      rotation={[ -0.3 ,0, 0 ]}
      near={0.1}
      far={10000}
      fov={45}
    />
  )
}

export default Camera
