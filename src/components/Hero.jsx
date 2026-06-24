import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section d-flex align-items-center" id="intro">
      <div className="intro_text">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" textAnchor="middle">
            HI
          </text>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-content-box">
              <span className="hero-sub-title">I am Mk Stanley</span>
              <h1 className="hero-title">
                Full Stack <br />
                Developer
              </h1>

              <div className="hero-image-box d-md-none text-center">
                <img src="/assets/img/hero/me.png" alt="Mk Stanley" />
              </div>

              <p className="lead">
                I break down complex user experience problems to create
                integrity focused solutions that connect billions of people
              </p>
              <div className="button-box d-flex flex-wrap align-items-center">
                <a
                  href="https://bit.ly/cv-mkstancreative"
                  className="btn tj-btn-secondary"
                >
                  Download CV
                </a>
                <ul className="ul-reset social-icons">
                  <li>
                    <a
                      href="https://facebook.com/mkstancreative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/2347068265165"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/mwlite/in/stanley-chidimma"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/mkstancreative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="hero-image-box text-center">
              <img src="/assets/img/hero/me.png" alt="Mk Stanley" />
            </div>
          </div>
        </div>

        <div className="funfact-area">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number">
                  <span className="odometer" data-count="4">
                    0
                  </span>
                </div>
                <div className="text">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number">
                  <span className="odometer" data-count="50">
                    0
                  </span>
                  +
                </div>
                <div className="text">
                  Project <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number">
                  <span className="odometer" data-count="1.5">
                    0
                  </span>
                  K
                </div>
                <div className="text">
                  Happy <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number">
                  <span className="odometer" data-count="4">
                    0
                  </span>
                </div>
                <div className="text">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
