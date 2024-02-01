import React from "react";
import "./styles.css";
import Header from "../Article/Header/Header";
import CardList from "../CardList/CardList";
import { CardListProps } from "../ArticleLayouts/Template-0/types";
import { v4 } from "uuid";

type PublicationsLayoutProps = {
  title?: string;
  description?: string;
  sections: CardListProps[];
};

const Layout = ({
  title = "Our Publications",
  description = "Explore Doable's publications and industry news sources. Our content covers breaking news and insights from top thought leaders across nearly all B2B and consumer interests.",
  sections = [],
}: PublicationsLayoutProps) => {
  return (
    <section className="publications">
      <Header title={title} description={description} />
      <section className="publication-lists-container">
        {sections.map((section) => (
          <CardList key={v4()} title={section.title} articles={section.articles} variant={section.variant} />
        ))}
      </section>
    </section>
  );
};

export default Layout;
