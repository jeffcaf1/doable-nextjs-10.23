import React from "react";
import "./styles.css";

type HeaderProps = {
  title: string;
  description: string;
};

const Header = ({ title, description }: HeaderProps) => {
  return (
    <header className="outer header-outer">
      <div className="inner header-inner">
        <div className="header-inner-wrapper">
          <h1 className="header-title">{title}</h1>
          <p className="header-description blockquote">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
