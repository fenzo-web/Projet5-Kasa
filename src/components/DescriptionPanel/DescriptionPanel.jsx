import React, { useState } from "react";
import "./DescriptionPanel.scss";

export default function DescriptionPanel({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="location__description">
      <p className="description__title" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-down ${isOpen ? "open" : ""}`}></i>
      </p>
      <p className={`description__content ${isOpen ? "open" : ""}`}>
        {content}
      </p>
    </div>
  );
}
