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

const jsonLd = {"@context":"http://schema.org","@type":"NewsMediaOrganization","name":"Doable News","email":"hello@doablehq.com","description":"Doable is a news platform for B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.","alternateName":["Doable","doable"],"logo":{"@type":"ImageObject","url":"https://default-doable.b-cdn.net/live-site-images/doable-og-image.png","height":"660","width":"1200"},"url":"https://www.alldoable.com","sameAs":["https://www.linkedin.com/company/xdoable/"],"founder":[{"@type":"Person","name":"Jeff Cafone"},{"@type":"Person","name":"Melissa Rosenthal"}],"brand":[{"@type":"Brand","name":"Doable | Technology","url":"https://www.alldoable.com/technology"},{"@type":"Brand","name":"Doable | People Powered","url":"https://www.alldoable.com/people-powered"},{"@type":"Brand","name":"Doable | Money, Finance, Economy","url":"https://www.alldoable.com/money-finance-economy"},{"@type":"Brand","name":"Doable | Legal","url":"https://www.alldoable.com/legal"},{"@type":"Brand","name":"Doable | Real Estate","url":"https://www.alldoable.com/real-estate"},{"@type":"Brand","name":"Doable | Sales","url":"https://www.alldoable.com/sales"}],"knowsAbout":[{"@type":"Thing","name":"technology"},{"@type":"Thing","name":"tech news"},{"@type":"Thing","name":"personal finance"},{"@type":"Thing","name":"economy"},{"@type":"Thing","name":"financial news"},{"@type":"Thing","name":"real estate"},{"@type":"Thing","name":"sales and marketing"},{"@type":"Thing","name":"health and wellness news"},{"@type":"Thing","name":"legal news"},{"@type":"Thing","name":"human resources"},{"@type":"Thing","name":"people management news"}]};

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
