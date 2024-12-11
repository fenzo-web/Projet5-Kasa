import React from "react";
import Banner from "./../../components/Banner/Banner";
import DescriptionPanel from "../../components/DescriptionPanel/DescriptionPanel";
import "./About.scss";

function About() {
  return (
    <div>
      <Banner context="about" />
      <div className="about__main">
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </div>
  );
}

export default About;
