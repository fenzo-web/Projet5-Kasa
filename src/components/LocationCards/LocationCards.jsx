import React, { useEffect } from "react";
import "./LocationCards.scss";
import { NavLink } from "react-router";

function LocationCards({ title, image, id }) {
  return (
    <NavLink to={`logement/${id}`} className="Location__Link">
      <article className="Location__Cards">
        <img src={image} alt="image" />
        <p className="Location__Cards__Title">{title}</p>
      </article>
    </NavLink>
  );
}

export default LocationCards;
