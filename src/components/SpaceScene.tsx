import React, { useRef, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Planet: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  const handleOver = useCallback(() => {
    document.body.style.cursor = 'pointer';
  }, []);

  const handleOut = useCallback(() => {
    document.body.style.cursor = 'default';
  }, []);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={mesh} position={position} onPointerOver={handleOver} onPointerOut={handleOut}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
};

const SpaceScene: React.FC = () => {
  const asteroidRefs = useRef<THREE.Mesh[]>([]);
  const asteroids = React.useMemo(
    () => new Array(20).fill(null).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      speed: Math.random() * 0.01 + 0.01,
    })),
    []
  );

  useFrame(() => {
    asteroidRefs.current.forEach((mesh, idx) => {
      if (mesh) {
        mesh.rotation.x += asteroids[idx].speed;
        mesh.rotation.y += asteroids[idx].speed;
      }
    });
  });

  return (
    <Canvas className="h-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <Planet position={[0, 0, 0]} />
      {asteroids.map((asteroid, idx) => (
        <mesh
          key={idx}
          ref={(el) => (asteroidRefs.current[idx] = el!)}
          position={asteroid.position}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#71717a" />
        </mesh>
      ))}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SpaceScene;
