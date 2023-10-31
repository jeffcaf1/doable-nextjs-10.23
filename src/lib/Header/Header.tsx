import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="outer header-outer">
      <div className="inner header-inner">
        <a href="/" className="header-logo">
          <img src="/images/logo.svg" alt="Doable Logo" />
        </a>
        <nav className="header-nav-outer">
          <div className="header-nav-inner">
            <ul>
              <li>
                <a href="/top" className="nav-link hover">
                  Top Stories
                </a>
              </li>
              <li>
                <a href="/publications" className="nav-link hover">
                  Publications
                </a>
              </li>
              <li>
                <a href="/industries" className="nav-link hover">
                  Industries
                </a>
              </li>
              <li>
                <a href="/signup" className="btn-primary">
                  Get Featured
                </a>
              </li>
            </ul>
          </div>

          <button className="header-hamburger">
            <div className="header-hamburger-inner"></div>
            <div className="header-hamburger-inner"></div>
            <div className="header-hamburger-inner"></div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
