import React, { useEffect } from "react";
import "./LocationCards.scss";
import { NavLink } from "react-router";

function LocationCards({ title, image, id }) {
  return (
    <article className="Location__Cards">
      <NavLink to={`logement/${id}`}>
        <img src={image} alt="image" />
        <p className="Location__Cards__Title">{title}</p>
      </NavLink>
    </article>
  );
}

export default LocationCards;
