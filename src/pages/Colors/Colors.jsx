import React from "react";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typograohy";
import stylesColor from "./Colors.module.css";

export default function Colors() {
  return (
    <section className={stylesColor.colors}>
      <div className={stylesColor.colors__container}>
        <div className={stylesColor.colors__container_content}>
          <div className={stylesColor.content_text}>
            <p className={stylesColor.content_text_title}>
              Typography & Colors
            </p>
            {typography.map((font) => (
              <div key={font.id} className={stylesColor.content_text_item}>
                <p
                  className={stylesColor.title_item}
                  style={{ fontFamily: `${font.font}, cursive` }}
                >
                  {font.name}
                </p>
                <p
                  className={stylesColor.letter_item}
                  style={{ fontFamily: `${font.font}, cursive` }}
                >
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </p>
              </div>
            ))}
          </div>
          <div className={stylesColor.content_color}>
            <div className={stylesColor.color_block}>
              <p className={stylesColor.color_title}>Colors</p>
              {colors.map((color) => (
                <div key={color.id} className={stylesColor.color_item}>
                  <div
                    className={stylesColor.color_item_circle}
                    style={{ backgroundColor: color.code }}
                  ></div>
                  <div className={stylesColor.color_item_code}>
                    {color.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
