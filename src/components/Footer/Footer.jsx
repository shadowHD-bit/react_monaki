import React from "react";
import { Link } from "react-router-dom";
import { AUTHOR_PAGE_PATH, COLORS_PAGE_PATH, MAIN_PAGE_PATH } from "../../utils/path";
import styledFooter from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styledFooter.footer}>
      <div className={styledFooter.footer__container}>
        <Link to={MAIN_PAGE_PATH}>
          <button className={styledFooter.footer_btn}>Home</button>
        </Link>
        <Link to={COLORS_PAGE_PATH}>
          <button className={styledFooter.footer_btn}>
            Typography and color
          </button>
        </Link>
        <Link to={AUTHOR_PAGE_PATH}>
          <button className={styledFooter.footer_btn}>Author</button>
        </Link>
      </div>
    </footer>
  );
}
