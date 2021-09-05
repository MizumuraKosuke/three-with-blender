import { useState, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Camera from './camera'
import GlbObject from './glb-object'
import Lights from './lights'

const Room = () => {
  const [ pixelRatio, setPixelRatio ] = useState(1)

  useEffect(() => {
    setPixelRatio(window.devicePixelRatio)
  }, [])

  return (
    <div className="w-screen h-screen">
      <Canvas
        shadows
        gl={{
          antialias: true,
          pixelRatio,
        }}
      >
        <Camera />
        <OrbitControls enablePan enableZoom enableRotate />
        <GlbObject />
        <Lights />
      </Canvas>
    </div>
  )
}

export default Room
