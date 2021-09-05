const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight
        position={[ 10, 10, 0 ]}
        intensity={1.5}
        color="#a50"
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
    </>
  )
}

export default Lights
