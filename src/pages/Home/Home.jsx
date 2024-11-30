import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import LocationCards from "../../components/LocationCards/LocationCards.jsx";

function App() {
  return (
    <main>
      <Banner context="home" title="Chez vous, partout et ailleurs" />
      <div className="cards-container">
        <LocationCards />
        <LocationCards />
        <LocationCards />
        <LocationCards />
      </div>
    </main>
  );
}

export default App;
