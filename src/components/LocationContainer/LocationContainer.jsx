import "./LocationContainer.scss";
import LocationCards from "./../LocationCards/LocationCards";
import { fetchLocation } from "../../utils/fetchdata.js";
const locations = await fetchLocation();

export default function LocationContainer() {
  return (
    <div className="cards-container">
      {locations.map((location) => (
        <LocationCards
          key={location.id}
          title={location.title}
          image={location.cover}
          id={location.id}
        />
      ))}
    </div>
  );
}
