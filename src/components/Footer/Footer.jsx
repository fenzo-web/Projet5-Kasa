import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="/logo-black.png" alt="logo" />
      </div>
      <div className="footer__text">
        © 2020 Kasa. All{" "}
        <span className="footer__text--break">rights reserved</span>
      </div>
    </div>
  );
}
