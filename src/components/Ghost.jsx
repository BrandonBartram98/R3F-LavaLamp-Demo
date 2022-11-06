import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export function Ghost(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/GhostyOptimized.glb", true)

  useFrame((state, delta) => {
    if (group.current) {
      const time = state.clock.getElapsedTime()
      group.current.rotation.y -= delta * 0.2
      group.current.position.x = Math.cos(time * 0.2) * 3
      group.current.position.y = 2 + Math.sin(time * 0.4) * 1
      group.current.position.z = Math.sin(time * 0.2) * 3
    }
  })

  return (
    <group ref={group} {...props} dispose={null}
    position={[0, 0, 0]} 
    rotation-y={Math.PI}
    scale={0.00004}
    >
      <mesh geometry={nodes.mesh_0.geometry} material={materials.Ghost} />
        <mesh geometry={nodes.mesh_0_1.geometry} material={materials.Eyes} />
        <mesh geometry={nodes.mesh_0_2.geometry} material={materials.Pupils} />
    </group>
  )
}

useGLTF.preload("/GhostyOptimized.glb");