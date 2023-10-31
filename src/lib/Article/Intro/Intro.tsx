import React from "react";
import "./styles.css";

const Intro = ({ html }: { html: string }) => {
  return <div className="intro-container" dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default Intro;
