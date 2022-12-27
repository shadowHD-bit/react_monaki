import React from "react";
import styledAuthor from "./Author.module.css";
import { social_links } from "../../utils/socialLinks";

export default function Author() {
  return (
    <>
      <div className={styledAuthor.author}>
        <div className={styledAuthor.author__container}>
          <div className={styledAuthor.author__main_text}>
            <p className={styledAuthor.main_text}>
              <span className={styledAuthor.line}>LIKE</span>&thinsp;AND&thinsp;
              <span className={styledAuthor.line}>FOLLOW</span> FOR REGULAR
              UPDATES
            </p>
          </div>
          <div className={styledAuthor.link_container}>
            <div className={styledAuthor.link_container_text}>
              <p className={styledAuthor.text}>ANY QUERIES? VISIT US ON</p>
              <a
                href="http://nickelfox.com"
                rel="noreferrer"
                target="_blank"
                className={styledAuthor.link}
              >
                www.nickelfox.com
              </a>
            </div>
            <div className={styledAuthor.social}>
              {social_links.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  rel="noreferrer"
                  target="_blank"
                  className={styledAuthor.social_link}
                >
                  <img className={styledAuthor.link_img} src={link.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
