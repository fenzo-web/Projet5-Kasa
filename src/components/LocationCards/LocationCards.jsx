import React from "react";
import "./LocationCards.scss";
import { NavLink } from "react-router";

function LocationCards({ title, image }) {
  return (
    <article className="Location__Cards">
      <NavLink to="logement">
        <img src={image} alt="" />
        <p className="Location__Cards__Title">{title}</p>
      </NavLink>
    </article>
  );
}

export default LocationCards;
