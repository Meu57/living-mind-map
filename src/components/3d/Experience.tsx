"use client";

// Step 2.2: Import necessary components from our installed libraries.
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

// Step 2.3: Define our main 3D component.
export const Experience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Step 2.5: Add lighting to the scene. */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Step 2.6: Add our first 3D object. */}
      <Box position={[-1, 1, 0]} castShadow>
        <meshStandardMaterial color="orange" />
      </Box>

      {/* Step 2.7: Add a "floor" for shadows to fall on. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Step 2.8: Add controls to interact with the scene. */}
      <OrbitControls makeDefault enableZoom enablePan enableRotate />
    </Canvas>
  );
};

export default Experience;
