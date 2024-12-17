import React from "react";
import Banner from "./../../components/Banner/Banner";
import DescriptionPanel from "../../components/DescriptionPanel/DescriptionPanel";
import "./About.scss";

function About({ title, content }) {
  const descriptions = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informationss sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à nos equipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div className="about__main">
      <Banner context="about" />
      <div className="about__description">
        {descriptions.map((description) => {
          return (
            <DescriptionPanel
              key={description.title}
              title={description.title}
              content={description.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;
