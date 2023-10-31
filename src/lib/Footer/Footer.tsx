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
                  <h4 className="footer-nav-title">Product</h4>
                </li>
                <li>
                  <a href="/about" className="footer-link hover">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link hover">
                    SaaS Vendors
                  </a>
                </li>
                <li>
                  <a href="/login" className="footer-link hover">
                    Pricing
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
                <li>
                  <a href="/contact" className="footer-link hover">
                    Team
                  </a>
                </li>
                <li>
                  <a href="/login" className="footer-link hover">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/login" className="footer-link hover">
                    News
                  </a>
                </li>
              </ul>

              <ul className="footer-nav-column">
                <li>
                  <h4 className="footer-nav-title">Legal</h4>
                </li>
                <li>
                  <a href="/about" className="footer-link hover">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link hover">
                    Terms
                  </a>
                </li>
              </ul>

              <ul className="footer-nav-social">
                <li>
                  <a href="https://www.twitter.com" className="hover">
                    <img src="/images/twitter.png" alt="Twitter" className="footer-social-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" className="hover">
                    <img src="/images/linkedin.png" alt="LinkedIn" className="footer-social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-inner-right">
            <div className="footer-inner-right-container">
              <a href="/signup" className="btn-primary footer-cta">
                Get Featured
              </a>
            </div>
          </div>
        </div>
        <div className="footer-inner-bottom">
          <span className="footer-legal">© 2023 Inspo Digital, Inc. All rights reserved.</span>
          <img src="/images/logo.svg" alt="Doable Logo" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
