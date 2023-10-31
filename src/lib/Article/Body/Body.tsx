import React from "react";
import "./styles.css";

const Body = ({ html }: { html: string }) => {
  return <div className="body-container" dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default Body;
