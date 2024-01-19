"use client";

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
  data: any;
};

const Layout = ({
  title = "Our Publications",
  description = "Sub-heading for the all publications page describing what everything is",
  sections = [],
  data,
}: PublicationsLayoutProps) => {
  console.log("PublicationsLayout.tsx: Layout: sections:", data);

  return (
    <section className="publications">
      <Header title="Our Publications" description="Sub-heading for the all publications page describing what everything is" />
      <section className="publication-lists-container">
        {sections.map((section) => (
          <CardList key={v4()} title={section.title} articles={section.articles} variant={section.variant} />
        ))}
      </section>
    </section>
  );
};

export default Layout;
