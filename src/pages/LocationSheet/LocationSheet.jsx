import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LocationDescription from "../../components/LocationDescription/LocationDescription.jsx";
import { fetchLocation } from "../../utils/fetchdata.js";

function LocationSheet() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID depuis l'URL

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        console.log("Fetching location data...");

        const locations = await fetchLocation(); // Appel de la fonction fetchLocation
        console.log("Fetched locations:", locations);

        if (!locations || locations.length === 0) {
          console.error("Aucune location trouvée !");
          return; // Aucune location trouvée, arrête le processus ici
        }

        // Ici, on compare les IDs comme des chaînes de caractères
        const location = locations.find(
          (location) => location.id === id // Comparaison en tant que chaîne
        );

        if (!location) {
          console.error("Location introuvable avec l'ID", id);
          return;
        }

        console.log("Selected location:", location);
        setSelectedLocation(location); // Mise à jour de l'état avec la location trouvée
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchLocationData();
  }, [id]); // Effectue l'appel à chaque fois que l'ID change

  if (!selectedLocation) {
    return <div>Loading...</div>; // Affiche un message de chargement si la location n'est pas encore récupérée
  }

  return (
    <div className="location__page">
      <div>
        <img src={selectedLocation.cover} alt={selectedLocation.title} />
      </div>
      <div className="location__title">
        <h1>{selectedLocation.title}</h1>
        <p>{selectedLocation.location}</p>
        <h2>{selectedLocation.tags.join(" ")}</h2>
      </div>
      <div>
        <div className="location__host">
          <h3>Host: {selectedLocation.host.name}</h3>{" "}
          {/* Affichage du nom de l'host */}
          <div className="location__host__image">
            {/* affichage de l'image de l'host */}
            <img
              src={selectedLocation.host.picture}
              alt={selectedLocation.host.name}
            />
          </div>
          {/* Affichage des étoiles */}
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
      <LocationDescription />
    </div>
  );
}

export default LocationSheet;