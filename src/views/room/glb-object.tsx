import { useMemo, useState } from 'react'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

const GlbObject = () => {
  const [ room, setRoom ] = useState<GLTF>()

  useMemo(() => {
    new GLTFLoader().load('/obj/room.glb', (model) => {
      model.scene.children.forEach((mesh) => {
        if (mesh.name === 'Plane') {
          mesh.receiveShadow = true
          return
        }
        mesh.castShadow = true
      })
      console.log(model)
      setRoom(model)
    })
  }, [])

  return (
    <mesh>
      {!!room && <primitive object={room.scene} />}
    </mesh>
  )
}

export default GlbObject
