import React from "react";
import "./ErrorPage.scss";
import { NavLink } from "react-router";

export default function ErrorPage() {
  return (
    <main className="main__error__page">
      <div className="error__page">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>

      <NavLink to="/" className="link">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  );
}
