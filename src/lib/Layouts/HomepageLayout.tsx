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
        description="Straight from the source - we deliver breaking news, insights, and trends from the top companies and thought leaders across nearly every industry"
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
