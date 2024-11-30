import React from "react";
import "./Banner.scss";

export default function Banner({ title, context }) {
  return (
    <div className={`banner-container banner-container-${context}`}>
      <div className="banner-text-container">
        <div className="banner-text">{title && title}</div>
      </div>
    </div>
  );
}
