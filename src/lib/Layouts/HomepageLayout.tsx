import React from "react";
import "./styles.css";
import Header from "../Article/Header/Header";
import CardList from "../CardList/CardList";
import { CardListProps } from "../ArticleLayouts/Template-0/types";
import { v4 } from "uuid";
import { Title } from "./HomepageTitle";

type HomepageLayoutProps = {
  sections: CardListProps[];
};

const Layout = ({ sections = [] }: HomepageLayoutProps) => {
  return (
    <section className="publications">
      <Header
        customTitleComponent={<Title />}
        description="Doable turns content into conversations. We deliver breaking news and thought leadership perspectives across nearly every industry"
      />
      <section className="publication-lists-container">
        {sections.map((section) => (
          <CardList key={v4()} title={section.title} articles={section.articles} variant={section.variant} />
        ))}
      </section>
    </section>
  );
};

export default Layout;
