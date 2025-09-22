// src/components/3d/Experience.tsx
"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

/**
 * Small, robust R3F scene. Uses rotation array (TS-friendly),
 * sets camera position, enables shadows and OrbitControls.
 */
export const Experience: React.FC = () => {
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

      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default Experience;
