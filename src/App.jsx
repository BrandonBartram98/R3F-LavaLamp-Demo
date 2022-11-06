import { Suspense, useState } from 'react'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import { Ghost } from './components/Ghost'
import { Loader, OrbitControls } from '@react-three/drei'
import { Lamp } from './components/Lamp'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { DoubleSide } from 'three'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Canvas camera={{ position: [0, 2, 5] }} gl={{ alpha: true, stencil: false, antialias: true }}>
				{/* <Perf /> */}
				<OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2.1} enableZoom={false} enablePan={false} />
				<ambientLight intensity={0.03} />
				<EffectComposer>
					<Bloom intensity={1} luminanceThreshold={0} luminanceSmoothing={0.5} />
				</EffectComposer>
				<Suspense fallback={null}>
					<Ghost />
					<Lamp />
					<mesh position-y={7.5}>
						<boxGeometry args={[15, 15, 15]} />
						<meshStandardMaterial color={'black'} side={DoubleSide} />
					</mesh>
				</Suspense>
			</Canvas>
			<Loader />
		</>
	)
}

export default App
