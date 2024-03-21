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

const jsonLd = {"@context":"http://schema.org","@type":"NewsMediaOrganization","name":"OutLever | News + Thought Leadership","email":"hello@OutLeverhq.com","  description": "OutLever is a news platform for thought leadership, trends, and industry insights. We offer stories from top minds in technology, wellness, finance, and beyond.","alternateName":["OutLever","OutLever"],"logo":{"@type":"ImageObject","url":"https://default-doable.b-cdn.net/live-site-images/outlever-og-image1%20.png","height":"660","width":"1200"},"url":"https://www.outlever.com","sameAs":["https://www.linkedin.com/company/outlever/"],"founder":[{"@type":"Person","name":"Jeff Cafone"},{"@type":"Person","name":"Melissa Rosenthal"}],"brand":[{"@type":"Brand","name":"OutLever | Technology","url":"https://www.outlever.com/technology"},{"@type":"Brand","name":"OutLever | People Powered","url":"https://www.outlever.com/people-powered"},{"@type":"Brand","name":"OutLever | Money, Finance, Economy","url":"https://www.outlever.com/money-finance-economy"},{"@type":"Brand","name":"OutLever | Legal","url":"https://www.outlever.com/legal"},{"@type":"Brand","name":"OutLever | Real Estate","url":"https://www.outlever.com/real-estate"},{"@type":"Brand","name":"OutLever | Sales","url":"https://www.outlever.com/sales"}],"knowsAbout":[{"@type":"Thing","name":"technology"},{"@type":"Thing","name":"tech news"},{"@type":"Thing","name":"personal finance"},{"@type":"Thing","name":"economy"},{"@type":"Thing","name":"financial news"},{"@type":"Thing","name":"real estate"},{"@type":"Thing","name":"sales and marketing"},{"@type":"Thing","name":"health and wellness news"},{"@type":"Thing","name":"legal news"},{"@type":"Thing","name":"human resources"},{"@type":"Thing","name":"people management news"}]};

const Layout = ({ sections = [] }: HomepageLayoutProps) => {
  return (
   <section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ jsonLd }) }} />
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
    </section>
  );
};

export default Layout;
