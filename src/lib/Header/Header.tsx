"use client";

import React, { useState } from "react";
import "./styles.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          <button className="header-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="header-hamburger-inner"></div>
            <div className="header-hamburger-inner"></div>
            <div className="header-hamburger-inner"></div>
          </button>

          <div className={`header-hamburger-menu-outer ${isMenuOpen ? "show" : ""}`} onClick={() => setIsMenuOpen(false)}>
            <div className="header-hamburger-menu-inner" onClick={(e) => e.stopPropagation()}>
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

              <button className="menu-close-btn" onClick={() => setIsMenuOpen(false)}>
                <div className="menu-close-btn-inner hover"></div>
                <div className="menu-close-btn-inner hover"></div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
