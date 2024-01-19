import React from "react";
import "./styles.css";
import { CardProps } from "../ArticleLayouts/Template-0/types";

const Card = ({ variant = "small", link = "/", image = "", title = "", description = "" }: CardProps) => {
  return (
    <a href={link} className={`card card-${variant}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </a>
  );
};

export default Card;
