import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Error from "./pages/Error/Error.jsx";
import About from "./pages/About/About.jsx";
import FicheLogement from "./pages/FicheLogement/FicheLogement.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<FicheLogement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
