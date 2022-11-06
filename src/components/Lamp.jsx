import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, extend } from '@react-three/fiber'
import Raymarcher from 'three-raymarcher'
import { Color, Quaternion, Vector3 } from 'three'

extend({ Raymarcher })
const { operations, shapes } = Raymarcher

export function Lamp(props) {
	const { nodes, materials } = useGLTF('/Lavalamp.glb')

	const layers = useRef(
		Array.from({ length: 1 }, (v, l) => {
			const position = new Vector3(0, 0, 0)
			const scale = new Vector3().setScalar(Math.random() * 0.08)
			return [
				{
					color: new Color(0xff0000),
					operation: operations.union,
					position,
					rotation: new Quaternion(0, 0, 0, 1),
					scale,
					shape: shapes.sphere,
				},
				{
					color: new Color(0xff0000),
					operation: operations.union,
					position: position.clone(),
					rotation: new Quaternion(0, 0, 0, 1),
					scale: new Vector3().setScalar(Math.random() * 0.08),
					shape: shapes.sphere,
				},
				{
					color: new Color(0xff0000),
					operation: operations.union,
					position: position.clone(),
					rotation: new Quaternion(0, 0, 0, 1),
					scale: new Vector3().setScalar(Math.random() * 0.08),
					shape: shapes.sphere,
				},
			]
		})
	)

	useFrame(({ clock }) => {
		layers.current.forEach((layer, l) =>
			layer.forEach((entity, e) => {
				entity.position.x = Math.sin(e + ((1.26 * clock.oldTime) / 1000) * (1.03 + 0.5 * Math.cos(0.21 * e))) * 0.04
				entity.position.y = 1 + Math.abs(Math.cos(e + ((1.12 * clock.oldTime) / 1000) * Math.cos(1.22 + 0.1424 * e))) * 0.77
				entity.position.z = Math.cos(e + ((1.32 * clock.oldTime) / 1000) * 0.1 * Math.sin(0.92 + 0.53 * e)) * 0.04
			})
		)
	})

	const cubeMaterial3 = new THREE.MeshStandardMaterial({
		color: 'red',
		transparent: true,
		opacity: 0.6,
		emissive: new Color(0xff0000),
		emissiveIntensity: 0.5,
	})
	const lampGeom = new THREE.MeshStandardMaterial({
		color: 'white',
	})

	return (
		<group {...props} dispose={null} scale={[0.5, 0.5, 0.5]}>
			<mesh castShadow receiveShadow geometry={nodes.Lamp.geometry} material={lampGeom} />
			<mesh castShadow receiveShadow geometry={nodes.Glass.geometry} material={cubeMaterial3} position={[0, 2.75, 0]} />

			<pointLight position-y={2.5} intensity={5} power={50} distance={10} color={new Color(0xff0000)} />

			<raymarcher userData-layers={layers.current} userData-resolution={0.9} />
		</group>
	)
}

useGLTF.preload('/Lavalamp.glb')
