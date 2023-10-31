import React from "react";
import "./styles.css";
import ArticleList from "../../CardList/CardList";
import Header from "../../Article/Header/Header";
import CardList from "../../CardList/CardList";

const Layout = () => {
  return (
    <section className="publication template-0">
      <Header
        title="Modern Companies, Modern Systems"
        description="Doable hosts over 50 publications dedicated to the top B2B thought leaders. We get the hottest daily takes from enterprise and mid-market masterminds who are driving technology businesses forward."
      />
      <section className="stories-lists-container">
        <CardList variant="large" />
        <CardList />
      </section>
    </section>
  );
};

export default Layout;
