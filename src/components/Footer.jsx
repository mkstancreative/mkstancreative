import React from "react";

const Footer = () => {
  return (
    <footer className="tj-footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-logo-box">
              <a href="#intro">
                <img src="/assets/img/logo/mk-logo.png" alt="MkstanCreative" />
              </a>
            </div>
            <div className="footer-menu">
              <nav>
                <ul>
                  <li>
                    <a href="#services-section">Services</a>
                  </li>
                  <li>
                    <a href="#works-section">Works</a>
                  </li>
                  <li>
                    <a href="#resume-section">Resume</a>
                  </li>
                  <li>
                    <a href="#skills-section">Skills</a>
                  </li>
                  <li>
                    <a href="#testimonials-section">Testimonials</a>
                  </li>
                  <li>
                    <a href="#contact-section">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="copy-text">
              {/* The legal name belongs in the footer anyway, and it gives
                  the page a second plain-text mention of it for name searches. */}
              <p>
                &copy; {new Date().getFullYear()} MkstanCreative &mdash; Stanley
                Chidimma Makuochukwu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
