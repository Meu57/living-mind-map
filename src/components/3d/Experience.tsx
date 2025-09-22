"use client";

import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

      <Box position={[-1, 1, 0]} castShadow>
        <meshStandardMaterial color="orange" />
      </Box>

      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* makeDefault allows this to control the camera without extra props */}
      <OrbitControls makeDefault />
    </Canvas>
  );
};

// No need to export default if you are using named exports
// export default Experience;