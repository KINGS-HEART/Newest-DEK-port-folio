import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8b5cf6" wireframe />
    </mesh>
  );
}

function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={2} />

        <Cube />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default HeroCanvas;