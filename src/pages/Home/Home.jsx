import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import LocationContainer from "../../components/LocationContainer/LocationContainer.jsx";

function App() {
  return (
    <main>
      <Banner context="home" title="Chez vous, partout et ailleurs" />
      <LocationContainer />
    </main>
  );
}

export default App;
