import React from "react";
import "./styles.css";

type CoverImageProps = {
  src: string;
  caption: string;
};

const CoverImage = ({ src, caption }: CoverImageProps) => {
  return (
    <figure className="article-cover-image">
      <img src={src} alt={caption} />
      {/* <figcaption>Qstn Placeholder</figcaption> */}
    </figure>
  );
};

export default CoverImage;
