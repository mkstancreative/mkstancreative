import React from "react";

const Header = () => {
  return (
    <>
      {/* HEADER START */}
      <header className="tj-header-area header-absolute">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="/">
                  <img src="/assets/img/logo/mk-logo.png" alt="MkstanCreative" />
                </a>
              </div>

              <div className="header-info-list d-none d-md-inline-block">
                <ul className="ul-reset">
                  <li>
                    <a href="/">MkstanCreative</a>
                  </li>
                </ul>
              </div>

              <div className="header-menu">
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

              <div className="header-button">
                <a
                  href="https://wa.me/2347068265165"
                  className="btn tj-btn-primary"
                >
                  Contact
                </a>
              </div>

              <div className="menu-bar d-lg-none">
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="tj-header-area header-2 header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="/">
                  <img src="/assets/img/logo/mk-logo.png" alt="MkstanCreative" />
                </a>
              </div>

              <div className="header-info-list d-none d-md-inline-block">
                <ul className="ul-reset">
                  <li>
                    <a href="/">MkstanCreative</a>
                  </li>
                </ul>
              </div>

              <div className="header-menu">
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

              <div className="header-button">
                <a
                  href="https://wa.me/2347068265165"
                  className="btn tj-btn-primary"
                >
                  Contact
                </a>
              </div>

              <div className="menu-bar d-lg-none">
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* HEADER END */}
    </>
  );
};

export default Header;
