import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

function AnimatedMesh() {
  const outerMeshRef = useRef<Mesh>(null);
  const innerMeshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x += delta * 0.2;
      outerMeshRef.current.rotation.y += delta * 0.3;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.3;
      innerMeshRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group>
        {/* Outer Wireframe Icosahedron */}
        <mesh ref={outerMeshRef}>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshStandardMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Inner Octahedron */}
        <mesh ref={innerMeshRef}>
          <octahedronGeometry args={[1.2]} />
          <meshStandardMaterial
            color="#c084fc"
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 3]} intensity={2.5} color="#c084fc" />
        <directionalLight position={[-3, -3, -3]} intensity={1} color="#60a5fa" />

        <AnimatedMesh />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default HeroCanvas;