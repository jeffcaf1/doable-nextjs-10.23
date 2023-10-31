import React from "react";
import "./styles.css";
import ArticleList from "../../CardList/CardList";
import Header from "../../Article/Header/Header";
import CardList from "../../CardList/CardList";

const Layout = () => {
  return (
    <section className="publications template-0">
      <Header title="Our Publications" description="Sub-heading for the all publications page describing what everything is" />
      <section className="publication-lists-container">
        <CardList />
        <CardList />
      </section>
    </section>
  );
};

export default Layout;
