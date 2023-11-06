import React from "react";
import "./styles.css";
import Header from "../Article/Header/Header";
import CardList from "../CardList/CardList";
import { CardListProps } from "../ArticleLayouts/Template-0/types";
import { v4 } from "uuid";

type PublicationLayoutProps = {
  title?: string;
  description?: string;
  sections: CardListProps[];
};

const Layout = ({
  title = "Modern Companies, Modern Systems",
  description = "Doable hosts over 50 publications dedicated to the top B2B thought leaders. We get the hottest daily takes from enterprise and mid-market masterminds who are driving technology businesses forward.",
  sections = [],
}: PublicationLayoutProps) => {
  return (
    <section className="publication">
      <Header title={title} description={description} />
      <section className="stories-lists-container">
        {sections.map((section) => (
          <CardList key={v4()} title={section.title} articles={section.articles} variant={section.variant} />
        ))}
      </section>
    </section>
  );
};

export default Layout;
