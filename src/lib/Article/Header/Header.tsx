import React from "react";
import "./styles.css";

type HeaderProps = {
  title?: string;
  description?: string;
  childSectionTagAsText?: string;
  publicationSlugAsText?: string;
  publicationName?: string;
  customTitleComponent?: React.ReactNode;
};

const Header = ({ title, childSectionTagAsText, description, publicationName, publicationSlugAsText, customTitleComponent }: HeaderProps) => {

  const pubSlug = publicationSlugAsText ? `/${publicationSlugAsText}` : '#';

  return (
    <header className="outer article-header-outer">
      <div className="inner article-header-inner">
        <div className="article-header-inner-wrapper">
          {publicationName && (
            <h3 className="article-header-publication-name">
             <a href={pubSlug}>{publicationName.toLocaleLowerCase()}</a>
            </h3>
          )}
          {childSectionTagAsText && (
            <h3 className="article-header-child-section-name">
              {childSectionTagAsText}
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
