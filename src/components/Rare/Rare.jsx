import React from "react";
import { currentDate } from "../../utils/currentDate";
import RareCard from "../RareCard/RareCard";
import styledRare from "./Rare.module.css";

export default function Rare() {
  return (
    <>
      <section className={styledRare.rare}>
        <div className={styledRare.rare__content}>
          <div className={styledRare.rare__content_card}>
            <RareCard />
          </div>
          <div className={styledRare.rare__content_text}>
            <div className={styledRare.rare__content_text_container}>
              <p className={styledRare.text_date}>{currentDate}</p>
              <p className={styledRare.text_title}>Rare Virtual World</p>
              <p className={styledRare.text_owner}>Owned By OXOJ</p>
              <p className={styledRare.text_description}>
                A NEW WAVE OF COLLECTIBLES IS ABOUT TO HIT THE ETHEREUM
                BLOCKCHAIN. A SET OF 3.333 UNIQUE COLLECTABLES, THE ADDITION TO
                YOUR NFT COLLECTION YOU’VE BEEN WAITING FOR.
              </p>
            </div>
          </div>
        </div>
        <div className={styledRare.nft}>NFT</div>
      </section>
    </>
  );
}
