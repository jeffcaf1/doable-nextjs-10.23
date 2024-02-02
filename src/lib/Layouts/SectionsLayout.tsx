import React from "react";
import "./styles.css";
import Header from "../Article/Header/SectionHeader";
import CardList from "../CardList/CardList";
import { CardListProps } from "../ArticleLayouts/Template-0/types";
import { v4 } from "uuid";

type SectionLayoutProps = {
  title?: string;
  description?: string;
  sections: CardListProps[];
};

const Layout = ({
  title = "Section Title from Section Page",
  description = "Section Description from Section Page",
  sections = [],
}: SectionLayoutProps) => {
  return (
    <section className="publications">
      <Header title={title} description={description} />
      <section className="section-lists-container">
        {sections.map((section) => (
          <CardList key={v4()} title={section.title} articles={section.articles} variant={section.variant} />
        ))}
      </section>
    </section>
  );
};

export default Layout;
