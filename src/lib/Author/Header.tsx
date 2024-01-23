import React from "react";
import "./styles.css";

type HeaderProps = {
  title?: string;
  description?: string;
  titleAndCompany?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
};

const Header = ({ title, description, titleAndCompany, twitterUrl, websiteUrl, linkedInUrl }: HeaderProps) => {
  return (
    <header className="outer author-header-outer">
      <div className="inner author-header-inner">
        <div className="author-header-inner-wrapper">
          <h1 className="author-header-title">
            {title}
            {titleAndCompany && <span className="author-header-title-and-company"> | {titleAndCompany}</span>}
          </h1>

          <ul className="author-header-social">
            {linkedInUrl && (
              <li>
                <a href={linkedInUrl} className="hover" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin.png" alt="LinkedIn" className="author-header-social-icon" />
                </a>
              </li>
            )}

            {twitterUrl && (
              <li>
                <a href={twitterUrl} className="hover" target="_blank" rel="noopener noreferrer">
                  <img src="/images/twitter.png" alt="Twitter" className="author-header-social-icon" />
                </a>
              </li>
            )}

            {websiteUrl && (
              <li>
                <a href={websiteUrl} className="hover author-header-social-website" target="_blank" rel="noopener noreferrer">
                  {websiteUrl?.replace("https://", "").replace("http://", "").replace("www.", "")}
                </a>
              </li>
            )}
          </ul>


          <p className="author-header-description blockquote">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
