import React from "react";
import Head3D from "../Head3D/Head3D";
import stylesLayout from "./Layout.module.css";

export default function Layout() {
  return (
    <section className={stylesLayout.main__content}>
      <div className={stylesLayout.main__content_text}>
        <p className={stylesLayout.text__title}>Virtual World</p>
        <p className={stylesLayout.text__subtitle}>
          WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT. SUPPORT
          AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
        </p>
      </div>
      <div className={stylesLayout.main__content_model}>
        <div className={stylesLayout.model}>
            <Head3D />
        </div>
        <div className={stylesLayout.model__bg}>
          <p className={stylesLayout.model__bg_p}>
            WELCOMETOMonaki!MEETOURCOLLECTIONOF3.333UNIQUE
          </p>
          <p className={stylesLayout.model__bg_p}>
            WELCOMETOMonaki!MEETOURCOLLECTIONOF3.333UNIQUENFT.SUPPORTANDJOINOURCOMMUNITY
          </p>
          <p className={stylesLayout.model__bg_p}>
            WELCOMETOMonaki!MEETOURCOLLECTIONOF3.333UNIQUENFT.
          </p>
          <p className={stylesLayout.model__bg_p}>
            WELCOMETOMonaki!MEETOURCOLLECTIONOF3.333UNIQUENFT.SUPPORTANDJOINOURCOMMUNITY
          </p>
          <p className={stylesLayout.model__bg_p}>
            WELCOMETOMonaki!MEETOURCOLLECTIONOF3.333UNIQUENFT.SUPPORTANDJOINOURCOMMUNITY
          </p>
          <p className={stylesLayout.model__bg_p}>
            WELCOMETOMonaki!MEETOURCOLLECTIONOF3.333UNIQUENFT.SUPPORTANDJOINOURCOMMUNITY
          </p>
          <p className={stylesLayout.model__bg_p}>
            WELCOMETOMonaki!MEETOURCOLLECTIONOF3.333UNIQUENFT.SUPPORTANDJOINOURCOMMUNITY
          </p>
          <p className={stylesLayout.model__bg_p}>
            WELCOMETOMonaki!MEETOURCOLLECTIONOF3.333UNIQUENFT.SUPPORTANDJOINOURCOMMUNITY
          </p>
          <p className={stylesLayout.model__bg_p}>
            WELCOMETOMonaki!MEETOURCOLLECTIONOF3.333UNIQUENFT.SUPPORTANDJOINOURCOMMUNITY
          </p>
        </div>
      </div>
    </section>
  );
}
