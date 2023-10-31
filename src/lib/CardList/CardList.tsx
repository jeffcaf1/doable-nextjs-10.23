import React from "react";
import Card from "../Card/Card";
import "./styles.css";

const CardList = ({ variant = "small" }: { variant?: "small" | "large" }) => {
  return (
    <div className={`card-list card-list-variant-${variant}`}>
      <div className="card-list-header">
        <h1 className="card-list-title">Featured</h1>
      </div>

      <Card variant={variant} />
      <Card variant={variant} />
      <Card variant={variant} />
      <Card variant={variant} />
    </div>
  );
};

export default CardList;
