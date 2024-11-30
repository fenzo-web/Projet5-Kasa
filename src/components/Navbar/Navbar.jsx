import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="about">
        <div>A Propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
