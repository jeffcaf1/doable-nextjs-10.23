import React from "react";
import "./styles.css";

const Card = ({ variant = "small" }: { variant: "small" | "large" }) => {
  return (
    <a href="/" className={`card card-${variant}`}>
      <img
        src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19413392/sokane_191127_3819_5607.jpg"
        alt="Article Image"
        className="card-image"
      />
      <div className="card-details">
        <h3 className="card-title">Porsche is adding Google to its cars as VW’s software problems worsen</h3>
        <p className="card-description">
          The sports car maker said it would use native Google apps in its future cars, starting in just two years. Meanwhile, VW is laying off thousands of
          people from its in-house software division
        </p>
      </div>
    </a>
  );
};

export default Card;
