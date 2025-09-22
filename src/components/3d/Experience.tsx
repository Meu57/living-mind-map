// Step 2.1: This is the MOST IMPORTANT line.
// It tells Next.js that this component, and all components it imports,
// are "Client Components". This means they will only render in the browser,
// where the necessary APIs for WebGL (like the 'window' object) exist.
// Our 3D world cannot run on the server.
"use client";

// Step 2.2: Import necessary components from our installed libraries.
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

// Step 2.3: Define our main 3D component.
export const Experience = () => {
  return (
    // Step 2.4: Set up the R3F Canvas.
    // This component creates the HTML <canvas> element and handles the
    // behind-the-scenes setup of the Three.js renderer and scene.
    // We add a 'shadows' prop to enable shadow rendering in our scene.
    <Canvas shadows>
      {/* Step 2.5: Add lighting to the scene. */}
      {/* A simple ambient light provides some base illumination. */}
      {/* A directional light will cast shadows, like the sun. */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

      {/* Step 2.6: Add our first 3D object. */}
      {/* We use the <Box> helper from Drei. It's a simple cube mesh. */}
      {/* We set its position and enable it to cast and receive shadows. */}
      <Box position={[-1, 1, 0]} castShadow>
        {/* We need to give our box a material to define its appearance. */}
        {/* A 'meshStandardMaterial' is a physically-based material that */}
        {/* reacts realistically to light. We'll make it orange. */}
        <meshStandardMaterial color="orange" />
      </Box>

      {/* Step 2.7: Add a "floor" for shadows to fall on. */}
      {/* We'll use another mesh, but shape it like a large plane. */}
      {/* We rotate it to be flat on the X-Z axis. */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Step 2.8: Add controls to interact with the scene. */}
      {/* The <OrbitControls> helper from Drei allows us to use the mouse */}
      {/* to rotate (click+drag), zoom (scroll), and pan (right-click+drag) */}
      {/* the camera around the scene. This is crucial for development. */}
      <OrbitControls />
    </Canvas>
  );
};