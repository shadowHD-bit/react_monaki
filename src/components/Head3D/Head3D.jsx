import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Pantheon from "../../models/Pantheon";

export default function Head3D() {

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight
            angle={0.1}
            intensity={0.9}
            penumbra={1}
            castShadow
            position={[10, 15, 10]}
          />
          <Pantheon />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
