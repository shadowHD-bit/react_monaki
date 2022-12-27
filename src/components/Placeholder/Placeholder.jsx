import React from "react";
import styledPlaceholder from "./Placeholder.module.css";
export default function Placeholder() {
  return (
    <>
      <div className={styledPlaceholder.placeholder}>
        <div className={styledPlaceholder.spinner}></div>
      </div>
    </>
  );
}
