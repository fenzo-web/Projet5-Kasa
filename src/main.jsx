import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import FicheLogement from "./pages/LocationSheet/LocationSheet";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./SCSS/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
