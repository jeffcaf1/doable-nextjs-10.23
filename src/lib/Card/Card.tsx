import React from "react";
import "./styles.css";
import { CardProps } from "../ArticleLayouts/Template-0/types";

const Card = ({
  variant = "small",
  link = "/",
  image = "https://images.unsplash.com/photo-1698728877137-963bca5b5310?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title = "Porsche is adding Google to its cars as VW’s software problems worsen",
  description = "The sports car maker said it would use native Google apps in its future cars, starting in just two years. Meanwhile, VW is laying off thousands of people from its in-house software division",
}: CardProps) => {
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
