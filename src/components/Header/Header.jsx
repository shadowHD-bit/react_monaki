import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AUTHOR_PAGE_PATH,
  COLORS_PAGE_PATH,
  MAIN_PAGE_PATH,
} from "../../utils/path";
import styles from "./Header.module.css";

export default function Header() {
  const navRef = useRef();

  const [stateOpenMobileMenu, setStateOpenMobileMenu] = useState(false);

  const handleMenu = () => {
    navRef.current.classList.toggle(styles.responsive_header__content_nav);
    setStateOpenMobileMenu((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__content_logo}>
          <p className={styles.logo}>Monaki</p>
        </div>
        <div ref={navRef} className={styles.header__content_nav}>
          <nav className={styles.header__nav}>
            <ul className={styles.header__nav_list}>
              <li className={styles.header__nav_item}>
                <Link to={MAIN_PAGE_PATH} className={styles.header__nav_link}>
                  Home
                </Link>
              </li>
              <li className={styles.header__nav_item}>
                <Link to={COLORS_PAGE_PATH} className={styles.header__nav_link}>
                  Typography and color
                </Link>
              </li>
              <li className={styles.header__nav_item}>
                <Link to={AUTHOR_PAGE_PATH} className={styles.header__nav_link}>
                  Author
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__content_btn}>
          <button className={styles.header__btn_buy}>Buy nft</button>
          <button
            onClick={() => handleMenu()}
            className={styles.header__btn_mobile}
          >
            {!stateOpenMobileMenu ? "Menu" : "Close"}
          </button>
        </div>
      </div>
    </header>
  );
}
