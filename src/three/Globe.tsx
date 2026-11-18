
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'

function Planet() {
  return (
    <Float
      speed={1.2}
      rotationIntensity={0.25}
      floatIntensity={0.35}
    >
      <group>
        {/* Main planet */}
        <mesh>
          <sphereGeometry args={[1.65, 64, 64]} />
          <meshStandardMaterial
            color="#252b72"
            metalness={0.65}
            roughness={0.35}
            emissive="#17104c"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Glowing wireframe */}
        <mesh scale={1.008}>
          <sphereGeometry args={[1.65, 32, 32]} />
          <meshBasicMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>

        {/* Atmosphere */}
        <mesh scale={1.12}>
          <sphereGeometry args={[1.65, 48, 48]} />
          <meshBasicMaterial
            color="#6366f1"
            transparent
            opacity={0.07}
          />
        </mesh>

        {/* Orbital ring */}
        <mesh rotation={[1.1, 0.3, 0.4]}>
          <torusGeometry args={[2.1, 0.008, 16, 160]} />
          <meshBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.75}
          />
        </mesh>
      </group>
    </Float>
  )
}

export default function Globe() {
  return (
    <div className="globe-canvas">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />

          <pointLight
            position={[4, 4, 4]}
            intensity={35}
            color="#818cf8"
          />

          <pointLight
            position={[-4, -2, -3]}
            intensity={20}
            color="#38bdf8"
          />

          <Planet />

          <Stars
            radius={45}
            depth={30}
            count={1200}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.45}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI * 2 / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
