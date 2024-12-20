import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DescriptionPanel from "../../components/DescriptionPanel/DescriptionPanel.jsx";
import { fetchLocationById } from "../../utils/fetchdata.js";
import Carousel from "../../components/Carousel/Carousel.jsx";
import "./LocationSheet.scss";

function LocationSheet() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID depuis l'URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        console.log("Fetching location data...");

        const location = await fetchLocationById(id); // Appel de la fonction fetchLocation
        console.log("Fetched location:", location);

        if (!location?.id) {
          console.error("Aucune location trouvée !");
          throw new Error();
        } else {
          console.log("Selected location:", location);
          setSelectedLocation(location); // Mise à jour de l'état avec la location trouvée
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        navigate("/error");
      }
    };

    fetchLocationData();
  }, [id]); // Effectue l'appel à chaque fois que l'ID change

  if (!selectedLocation) {
    return <div>Loading...</div>; // Affiche un message de chargement si la location n'est pas encore récupérée
  }

  return (
    <div className="location__page">
      <div className="location__carousel">
        {/* Condition pour afficher soit le carousel, soit une image */}
        {selectedLocation.pictures.length > 1 ? (
          <Carousel images={selectedLocation.pictures} />
        ) : (
          <img
            src={selectedLocation.pictures[0]}
            alt="Location"
            className="carousel-image"
          />
        )}
      </div>
      <div className="location__title">
        <h1>{selectedLocation.title}</h1>
        <p>{selectedLocation.location}</p>
        <div className="location__tags">
          {selectedLocation.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="location__header">
        <div className="location__host">
          <div className="location__host__details">
            <h3>
              {selectedLocation.host.name.split(" ")[0]} <br />
              {selectedLocation.host.name.split(" ").slice(1).join(" ")}
            </h3>
            {/* Affichage du nom de l'host */}
            <div className="location__host__image">
              {/* affichage de l'image de l'host */}
              <img
                src={selectedLocation.host.picture}
                alt={selectedLocation.host.name}
              />
            </div>
          </div>

          {/* Affichage des étoiles */}
          <div className="location__stars">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={selectedLocation.rating >= num ? "on" : ""}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="location__description__area">
        <DescriptionPanel
          title="Description"
          content={selectedLocation.description}
        />
        <DescriptionPanel
          title="Equipement"
          content={selectedLocation.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default LocationSheet;
