import React from "react";
import "./LocationCards.scss";
import { NavLink } from "react-router";

function LocationCards() {
  return (
    <article className="Location__Cards">
      <NavLink to="logement">
        <p className="Location__Title">Titre de la Location</p>
      </NavLink>
    </article>
  );
}

export default LocationCards;
