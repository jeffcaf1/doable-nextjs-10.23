import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="outer footer-outer">
      <div className="inner footer-inner">
        <div className="footer-inner-top">
          <div className="footer-inner-left">
            <div className="footer-left-nav">
              <ul className="footer-nav-column">
                <li>
                  <h4 className="footer-nav-title">News</h4>
                </li>
                <li>
                  <a href="/publications" className="footer-link hover">
                    Publications
                  </a>
                </li>

              </ul>

              <ul className="footer-nav-column">
                <li>
                  <h4 className="footer-nav-title">Company</h4>
                </li>
                <li>
                  <a href="/about" className="footer-link hover">
                    About
                  </a>
                </li>
              </ul>

              <ul className="footer-nav-column">
                <li>
                  <h4 className="footer-nav-title">Legal</h4>
                </li>
                <li>
                  <a href="/privacy" className="footer-link hover">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="footer-link hover">
                    Terms
                  </a>
                </li>
              </ul>

              <ul className="footer-nav-social">
                <li>
                  <a href="https://www.linkedin.com/company/xOutLever/" className="hover">
                    <img src="/images/linkedin.png" alt="LinkedIn" className="footer-social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-inner-right">
            <div className="footer-inner-right-container">
              <a href="/get-featured" className="btn-primary footer-cta">
                Get Featured
              </a>
            </div>
          </div>
        </div>
        <div className="footer-inner-bottom">
          <span className="footer-legal">© 2024 Inspo Digital, Inc. All rights reserved.</span>
          <a href="/">
            <img src="/images/footer-logo.svg" alt="OutLever Logo" className="footer-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
