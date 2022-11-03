import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"

const Box = (props) => {
  const ref = useRef()
  const [hoverState, setHoverState] = useState(false)
  const [clickState, setClickState] = useState(false)

  useFrame((state, delta) => (ref.current.rotation.x += 0.005))
  useFrame((state, delta) => (ref.current.rotation.z += 0.005))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clickState ? 1.5 : 1}
      onClick={(event) => setClickState(!clickState)}
      onPointerOver={(event) => setHoverState(true)}
      onPointerOut={(event) => setHoverState(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={ hoverState ? "red" : "hotpink"} />
    </mesh>
  )
}

export default Box