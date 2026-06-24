import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="tj-footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-logo-box">
              <a href="/">
                <img src="/assets/img/logo/logo.png" alt="MkstanCreative" />
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
              <p>
                &copy; {currentYear} All rights reserved by{" "}
                <a
                  href="https://mkstancreative.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MkstanCreative
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
