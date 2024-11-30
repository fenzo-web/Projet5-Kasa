import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="logo-black.png" alt="logo" />
      </div>
      <div className="footer__text"> © 2020 Kasa. All rights reserved</div>
    </div>
  );
}
