import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import LocationCards from "../../components/LocationCards/LocationCards.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="cards-container">
        <LocationCards />
        <LocationCards />
        <LocationCards />
        <LocationCards />
      </div>
    </div>
  );
}

export default App;
