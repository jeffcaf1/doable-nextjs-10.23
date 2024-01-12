import React from "react";
import "./styles.css";

type HeaderProps = {
  title?: string;
  description?: string;
  pubChildSectionTagAsText?: string;
  publicationName?: string;
  customTitleComponent?: React.ReactNode;
};

const Header = ({ title, pubChildSectionTagAsText, description, publicationName, customTitleComponent }: HeaderProps) => {
  return (
    <header className="outer article-header-outer">
      <div className="inner article-header-inner">
        <div className="article-header-inner-wrapper">
          {publicationName && (
            <h3 className="article-header-publication-name">
              {publicationName.toLocaleLowerCase()}
            </h3>
          )}   
          {pubChildSectionTagAsText && (
            <h3 className="article-header-child-section-name">
              {pubChildSectionTagAsText}
            </h3>
          )}   
                 {!customTitleComponent && <h1 className="article-header-title">{title}</h1>}
          {customTitleComponent && customTitleComponent}
          <p className="article-header-description blockquote">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
