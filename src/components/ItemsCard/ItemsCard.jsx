import React from "react";
import Card from "../Card/Card";
import stylesItemsCard from "./ItemsCard.module.css";

export default function ItemsCard() {
  return (
    <>
      <section className={stylesItemsCard.items}>
        <div className={stylesItemsCard.items__content}>
          <div className={stylesItemsCard.card__container}>
            <Card variant={1} />
            <div className={stylesItemsCard.card__container_text}>
              <p className={stylesItemsCard.text_title}>SHIBA</p>
              <p className={stylesItemsCard.text_subtitle}>Lead Artist</p>
              <p className={stylesItemsCard.text}>
                Award-winning illustrator with an international portfolio
                including clients in film, publishing & the gaming industry.
                When he's not creating awesome artwork, Kabe is wreaking havoc
                in the world of table-top RPGs.
              </p>
            </div>
          </div>
          <div className={stylesItemsCard.card__container}>
            <Card variant={2} />
            <div className={stylesItemsCard.card__container_text}>
              <p className={stylesItemsCard.text_title}>CATY</p>
              <p className={stylesItemsCard.text_subtitle}>CCO</p>
              <p className={stylesItemsCard.text}>
                Wedge lives for the network. From selling gaming platforms to
                Mercedes F1, Guinness and UEFA, to ML software for some of the
                biggest Telecomms companies like Verizon, Vodafone, and
                T-mobile. This guy knows how to build profile and enjoys nothing
                more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
