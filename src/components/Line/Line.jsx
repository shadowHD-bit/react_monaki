import React from "react";
import stylesLine from "./Line.module.css";

export default function Line({ children }) {
  return (
    <>
      <div className={stylesLine.marquee_container}>
        <p className={stylesLine.marquee}>
            <span className={stylesLine.word}>{children}</span>
            <span className={stylesLine.word}>{children}</span>
            <span className={stylesLine.word}>{children}</span>
            <span className={stylesLine.word}>{children}</span>
            <span className={stylesLine.word}>{children}</span>
            <span className={stylesLine.word}>{children}</span>
            <span className={stylesLine.word}>{children}</span>
            <span className={stylesLine.word}>{children}</span>
            <span className={stylesLine.word}>{children}</span>
            <span className={stylesLine.word}>{children}</span>
        </p>
      </div>
    </>
  );
}
