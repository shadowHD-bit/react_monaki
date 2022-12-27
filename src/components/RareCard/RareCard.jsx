import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Silent from "../../models/Silent";
import Timer from "../Timer/Timer";
import styledRareCard from "./RareCard.module.css";

export default function RareCard() {
  return (
    <>
      <div className={styledRareCard.rare_card}>
        <div className={styledRareCard.rare_card__container}>
          <div className={styledRareCard.rare_card__top}>
            <div className={styledRareCard.rare_card__top_timer}>
              <p className={styledRareCard.text_timer}>Remaining Time</p>
              <Timer />
            </div>
          </div>
          <div className={styledRareCard.rare_card__center}>
            <div className={styledRareCard.rare_card__model}>
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
                  <Silent />
                  <OrbitControls
                    enablePan={false}
                    enableZoom={true}
                    enableRotate={true}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className={styledRareCard.rare_card__bottom}>
            <div className={styledRareCard.rare_card__bottom_left}>
                <p className={styledRareCard.current_text}>Current Bid</p>
                <p className={styledRareCard.current_price}>7 ETH</p>
            </div>
            <div className={styledRareCard.rare_card__bottom_right}>
                <button className={styledRareCard.btn_rare}>BID Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
