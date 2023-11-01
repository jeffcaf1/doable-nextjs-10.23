import React from "react";
import "./styles.css";
import Header from "../../Article/Header/Header";
import CardList from "../../CardList/CardList";
import { CardListProps } from "./types";
import { v4 } from "uuid";
import { Title } from "./HomepageTitle";

type HomepageLayoutProps = {
  sections: CardListProps[];
};

const Layout = ({ sections = [] }: HomepageLayoutProps) => {
  return (
    <section className="publications template-0">
      <Header
        customTitleComponent={<Title />}
        description="Doable is a conversational content platform bringing you interviews and insights from top B2B thought leaders"
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
