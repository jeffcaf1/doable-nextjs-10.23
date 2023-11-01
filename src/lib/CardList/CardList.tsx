import React from "react";
import Card from "../Card/Card";
import "./styles.css";
import { CardListProps } from "../Templates/Template-0/types";
import { v4 } from "uuid";

const CardList = ({ title = "Featured", articles = [], variant = "small" }: CardListProps) => {
  return (
    <div className={`card-list card-list-variant-${variant}`}>
      <div className="card-list-header">
        <h1 className="card-list-title">{title}</h1>
      </div>

      {articles.map((article) => (
        <Card key={v4()} variant={variant} image={article.image} title={article.title} description={article.description} link={article.link} />
      ))}
    </div>
  );
};

export default CardList;
