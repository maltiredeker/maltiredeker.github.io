import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader} from 'three'
import { useRef, useMemo, useEffect} from 'react'
import planetTextureSrc from "/images/Textures/mars_texture.jpg"
import moonTextureSrc from "/images/Textures/moon_texture.jpg"
import { OrbitControls, Environment} from '@react-three/drei'
import * as THREE from 'three'


function RotatingPlanet() {
  const groupRef = useRef()

  const planet_texture = useLoader(TextureLoader, planetTextureSrc)

  const asteroidCount = 200
  const asteroidRadius =2
  const asteroids = useMemo(() => {
    const arr = []
    for (let i = 0; i < asteroidCount; i++) {
      const angle = (i / asteroidCount) * 2 * Math.PI
      const x = Math.cos(angle) * (asteroidRadius + Math.random() * 0.2)
      const z = Math.sin(angle) * (asteroidRadius + Math.random() * 0.2)
      const y = (Math.random() - 0.5) * 0.05 // slight vertical variation
      arr.push([x, y, z])
    }
    return arr
  }, [])


  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotateY(0.01)
      
    }
  })
   useEffect(() => {
    if (groupRef.current) {
      // Tilt planet to the right (around Z axis)
      groupRef.current.rotation.z = THREE.MathUtils.degToRad(-45)
    }
  }, [])

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]}/>
        <meshStandardMaterial map={planet_texture} />
      </mesh>
      {asteroids.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03 + Math.random() * 0.03, 8, 0.05 + Math.random()*0.04]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      ))}
    </group>
  )
}

function Moon() {
  const orbitRef = useRef()
  const moonRef = useRef()
  const texture = useLoader(TextureLoader, moonTextureSrc)

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += 0.005 // orbit around planet
    }
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.005 // spin on its axis
    }
  })

  return (
    <group ref={orbitRef}>
      <mesh ref={moonRef} position={[-3, 1.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}


export default function MyUniverse() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <directionalLight intensity = {1} color="white" position={[5, -5, 5]} />
        <Environment preset="sunset" />
        <RotatingPlanet />
        <Moon />
        <OrbitControls enableZoom={false} enablePan={false}  minPolarAngle={Math.PI / 2}
  maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  )
}
