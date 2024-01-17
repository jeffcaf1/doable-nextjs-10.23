import React from "react";
import "./styles.css";
import Header from "../Author/Header";
import CardList from "../CardList/CardList";
import { CardListProps } from "../ArticleLayouts/Template-0/types";
import { v4 } from "uuid";

type AuthorLayoutProps = {
  title?: string;
  description?: string;
  titleAndCompany?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
  sections: CardListProps[];
};

const Layout = ({
  title = "Modern Companies, Modern Systems",
  description = "Doable hosts over 50 publications dedicated to the top B2B thought leaders. We get the hottest daily takes from enterprise and mid-market masterminds who are driving technology businesses forward.",
  sections = [],
  titleAndCompany,
  linkedInUrl,
  twitterUrl,
  websiteUrl,
}: AuthorLayoutProps) => {
  return (
    <section className="author">
      <Header
        title={title}
        description={description}
        titleAndCompany={titleAndCompany}
        linkedInUrl={linkedInUrl}
        twitterUrl={twitterUrl}
        websiteUrl={websiteUrl}
      />
      <section className="stories-lists-container">
        {sections.map((section) => (
          <CardList key={v4()} title={section.title} articles={section.articles} variant={section.variant} />
        ))}
      </section>
    </section>
  );
};

export default Layout;
