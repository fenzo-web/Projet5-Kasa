import React, { useEffect, useState } from "react";
import "./LocationContainer.scss";
import LocationCards from "./../LocationCards/LocationCards";

export default function LocationContainer() {
  const [location, setLocation] = useState([]);

  useEffect(fetchLocation, []);
  function fetchLocation() {
    fetch("location.json")
      .then((res) => res.json())
      .then((res) => setLocation(res))
      .catch(console.error);
  }
  return (
    <div className="cards-container">
      {location.map((location) => (
        <LocationCards title={location.title} image={location.cover} />
      ))}
    </div>
  );
}
