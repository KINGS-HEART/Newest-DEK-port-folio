import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import type { Mesh, Group } from "three";

function CentralShape() {
  const knotRef = useRef<Mesh>(null);
  const outerRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.25;
      knotRef.current.rotation.y += delta * 0.35;
    }
    if (outerRef.current) {
      outerRef.current.rotation.x -= delta * 0.15;
      outerRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.5}>
      <group position={[1.8, 0, 0]}>
        {/* Wireframe Torus Knot */}
        <mesh ref={knotRef}>
          <torusKnotGeometry args={[1.4, 0.35, 128, 16]} />
          <meshStandardMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.45}
            emissive="#a855f7"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Outer Wireframe Icosahedron */}
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingAccents() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Small floating octahedron top-left */}
      <Float speed={2} floatIntensity={2} position={[-3.5, 2, -1]}>
        <mesh>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#60a5fa" wireframe transparent opacity={0.6} />
        </mesh>
      </Float>

      {/* Small floating tetrahedrons bottom-left */}
      <Float speed={2.5} floatIntensity={1.8} position={[-2.8, -2.2, 0.5]}>
        <mesh>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#c084fc" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>

      {/* Floating cube top-right */}
      <Float speed={1.5} floatIntensity={2.2} position={[3.8, 2.5, -2]}>
        <mesh>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color="#818cf8" wireframe transparent opacity={0.4} />
        </mesh>
      </Float>
    </group>
  );
}

function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-80">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={3} color="#a855f7" />
        <pointLight position={[-5, -5, -2]} intensity={2.5} color="#38bdf8" />
        <directionalLight position={[0, 10, 0]} intensity={1.5} color="#c084fc" />

        <CentralShape />
        <FloatingAccents />

        {/* Subtle glowing digital particles in background */}
        <Sparkles count={60} scale={12} size={2.5} speed={0.4} opacity={0.35} color="#a855f7" />
        <Sparkles count={40} scale={10} size={2} speed={0.3} opacity={0.3} color="#38bdf8" />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default HeroCanvas;