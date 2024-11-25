import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div>Accueil</div>
      <div>A Propos</div>
    </nav>
  );
}

export default Navbar;
