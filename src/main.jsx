import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Error from "./pages/Error/Error.jsx";
import About from "./pages/About/About.jsx";
import FicheLogement from "./pages/FicheLogement/FicheLogement.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
