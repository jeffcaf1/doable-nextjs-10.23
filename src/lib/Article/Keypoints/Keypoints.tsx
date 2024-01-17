import React from "react";
import "./styles.css";

const Keypoints = ({ html }: { html: string }) => {
  return (
    <div className="keypoints-container">
      <h3>TL;DR Quick Facts</h3>
      <div className="keypoints blockquote" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default Keypoints;
