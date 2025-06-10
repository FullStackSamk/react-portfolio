import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { LINEAR } from '../utils/three-setup';

interface PlanetProps {
  position: [number, number, number];
}

const Planet = ({ position }: PlanetProps) => {
  const mesh = useRef<THREE.Mesh>(null!);

  const handleOver = useCallback(() => {
    document.body.style.cursor = "pointer";
  }, []);

  const handleOut = useCallback(() => {
    document.body.style.cursor = "default";
  }, []);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerOver={handleOver}
      onPointerOut={handleOut}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
};

interface AsteroidProps {
  position: [number, number, number];
  speed: number;
}

const Asteroid = ({ position, speed }: AsteroidProps) => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += speed;
      mesh.current.rotation.y += speed;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="#71717a" />
    </mesh>
  );
};

const AsteroidField = () => {
  const asteroids = useRef(
    new Array(20).fill(null).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      speed: Math.random() * 0.01 + 0.01,
    }))
  ).current;

  return (
    <>
      {asteroids.map((asteroid, idx) => (
        <Asteroid
          key={idx}
          position={asteroid.position}
          speed={asteroid.speed}
        />
      ))}
    </>
  );
};

const SceneContent = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <Planet position={[0, 0, 0]} />
      <AsteroidField />
      <OrbitControls enableZoom={false} />
    </>
  );
};

const SpaceScene = () => {
  return (
    <Canvas 
      className="h-full" 
      camera={{ position: [0, 0, 5] }}
      gl={{ 
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1
      }}
    >
      <SceneContent />
    </Canvas>
  );
};

export default SpaceScene;
