"use client";

import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Box position={[-1, 1, 0]} castShadow>
        <meshStandardMaterial color="orange" />
      </Box>

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <OrbitControls makeDefault enableZoom enablePan enableRotate />
    </Canvas>
  );
};

export default Experience;
