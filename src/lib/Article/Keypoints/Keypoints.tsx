import React from "react";
import "./styles.css";

const Keypoints = ({ html }: { html: string }) => {
  return (
    <div className="keypoints-container">
      <span>TL;DR Quick Facts</span>
      <div className="keypoints blockquote" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default Keypoints;
