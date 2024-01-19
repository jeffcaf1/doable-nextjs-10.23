import React from "react";
import "./styles.css";

type CoverImageProps = {
  src: string;
  caption: string;
  alt: string;
};

const CoverImage = ({ src, caption, alt }: CoverImageProps) => {
  return (
    <figure className="article-cover-image">
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default CoverImage;
