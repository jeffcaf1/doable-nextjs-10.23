import React from "react";
import "./styles.css";

type HeaderProps = {
  title?: string;
  description: string;
  customTitleComponent?: React.ReactNode;
};

const Header = ({ title, description, customTitleComponent }: HeaderProps) => {
  return (
    <header className="outer header-outer">
      <div className="inner header-inner">
        <div className="header-inner-wrapper">
          {!customTitleComponent && <h1 className="header-title">{title}</h1>}
          {customTitleComponent && customTitleComponent}
          <p className="header-description blockquote">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
