import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import threeLogo from './assets/threejs.svg'
import { Perf } from 'r3f-perf'
import Box from './components/Box'
import { Canvas } from '@react-three/fiber'
import { Ghost } from './components/Ghost'
import { Loader, OrbitControls } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas gl={{ alpha: true, stencil: false, antialias: true }}>
        {/* <Perf /> */}
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight />
        <pointLight intensity={0.75} position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Ghost />
        </Suspense>
        {/* <Box /> */}
      </Canvas>
      <Loader />
    </>
  )
}

export default App
