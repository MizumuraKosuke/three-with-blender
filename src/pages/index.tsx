import { useMemo, useState, useRef } from 'react'
import Head from 'next/head'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

const Glsl = () => {
  const [ room, setRoom ] = useState<GLTF>()

  useMemo(() => {
    new GLTFLoader().load('/obj/room.glb', (model) => {
      setRoom(model)
    })
  }, [])

  return (
    <mesh>
      {!!room && <primitive object={room.scene} />}
    </mesh>
  )
}

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

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Threee.js with Blender" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <Canvas
          gl={{
            antialias: true,
            premultipliedAlpha: false,
            preserveDrawingBuffer: true,
          }}
        >
          <Camera />
          <ambientLight />
          <directionalLight position={[ 1, 0, 1 ]} />
          <pointLight position={[ 10, 10, 10 ]} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <Glsl />
        </Canvas>
      </main>
    </div>
  )
}

export default Home
