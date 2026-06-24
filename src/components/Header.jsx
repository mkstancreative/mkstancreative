import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="tj-header-area header-absolute">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="/">
                  <img
                    src="/assets/img/logo/logo.png"
                    alt="MkstanCreative Logo"
                  />
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
                      <a href="#services-section" onClick={handleNavClick}>
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#works-section" onClick={handleNavClick}>
                        Works
                      </a>
                    </li>
                    <li>
                      <a href="#resume-section" onClick={handleNavClick}>
                        Resume
                      </a>
                    </li>
                    <li>
                      <a href="#skills-section" onClick={handleNavClick}>
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="#testimonials-section" onClick={handleNavClick}>
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#contact-section" onClick={handleNavClick}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-button">
                <a
                  href="mailto:mkstancreative@gmail.com"
                  className="btn tj-btn-primary"
                >
                  Hire me!
                </a>
              </div>

              <div className="menu-bar d-lg-none">
                <button onClick={toggleMenu}>
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

      <header className="tj-header-area header-2 header-sticky sticky-out">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="/">
                  <img
                    src="/assets/img/logo/logo.png"
                    alt="MkstanCreative Logo"
                  />
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
                      <a href="#services-section" onClick={handleNavClick}>
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#works-section" onClick={handleNavClick}>
                        Works
                      </a>
                    </li>
                    <li>
                      <a href="#resume-section" onClick={handleNavClick}>
                        Resume
                      </a>
                    </li>
                    <li>
                      <a href="#skills-section" onClick={handleNavClick}>
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="#testimonials-section" onClick={handleNavClick}>
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#contact-section" onClick={handleNavClick}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-button">
                <a
                  href="mailto:mkstancreative@gmail.com"
                  className="btn tj-btn-primary"
                >
                  Hire me!
                </a>
              </div>

              <div className="menu-bar d-lg-none">
                <button onClick={toggleMenu}>
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
    </>
  );
}
