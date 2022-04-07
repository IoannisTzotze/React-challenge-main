import React from "react";
import "../global.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <p className="footer__text">
        Made by{" "}
        <a
          className="footer__link"
          href="http://johntzotze.com/"
          target="_blank"
        >
          {" "}
          Ioanni Tzotze{" "}
        </a>
      </p>
    </div>
  );
};

export default Footer;
