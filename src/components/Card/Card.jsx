import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cat from "../../models/Cat";
import Shiba from "../../models/Shiba";
import stylesCard from "./Card.module.css";

export default function Card({ variant }) {
  switch (variant) {
    case 1:
      return (
        <>
          <div className={stylesCard.card}>
            <div className={stylesCard.card_model}>
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
                  <Shiba />
                  <OrbitControls
                    enablePan={false}
                    enableZoom={true}
                    enableRotate={true}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </>
      );

    case 2:
      return (
        <>
          <div className={stylesCard.card}>
            <div className={stylesCard.card_model}>
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
                  <Cat />
                  <OrbitControls
                    enablePan={false}
                    enableZoom={true}
                    enableRotate={true}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </>
      );
  }
}
