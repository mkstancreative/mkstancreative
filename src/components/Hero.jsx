import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // The counters used to be driven by jquery.appear and gated on
    // `$el.is(":appeared")`. That pseudo-selector is never registered by the
    // bundled build of the plugin, so jQuery 3.7 threw
    // "unrecognized expression: unsupported pseudo: appeared" and the fallback
    // never ran. IntersectionObserver does the same job with no plugin and no
    // arbitrary startup delay.
    const funfactArea = document.querySelector(".funfact-area");
    if (!funfactArea || !window.Odometer) return;

    const instances = [];
    document.querySelectorAll(".odometer").forEach((el) => {
      const countNumber = el.getAttribute("data-count");
      const val = parseFloat(countNumber);
      if (!countNumber || Number.isNaN(val)) return;

      const od = new window.Odometer({
        el,
        value: 0,
        format: countNumber.includes(".") ? "(,ddd).d" : "(,ddd)",
        theme: "default",
      });
      instances.push({ od, val });
    });

    if (!instances.length) return;

    const timers = [];
    const run = () => {
      instances.forEach(({ od, val }) => {
        timers.push(setTimeout(() => od.update(val), 500));
      });
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return () => timers.forEach(clearTimeout);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(funfactArea);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="hero-section d-flex align-items-center" id="intro">
      <div className="intro_text">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" textAnchor="middle">
            MK
          </text>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-content-box">
              <span className="hero-sub-title">I am Mk Stanley</span>
              <h1 className="hero-title">
                Software <br />
                Developer
              </h1>

              <div className="hero-image-box d-md-none text-center">
                <img src="/assets/img/mk.png" alt="Mk Stanley" />
              </div>

              <p className="lead">
                I break down complex problems into clean, dependable software
                &mdash; end-to-end web products and practical AI that
                businesses and their users can trust.
              </p>
              <div className="button-box d-flex flex-wrap align-items-center">
                <a href="#contact-section" className="btn tj-btn-secondary">
                  Contact us
                </a>
                <ul className="ul-reset social-icons">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+2347068265165"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-light fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/stanley-chidimma"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/mkstancreative"
                      target="_blank"
                      rel="noreferrer"
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
              <img src="/assets/img/mk.png" alt="Mk Stanley" />
            </div>
          </div>
        </div>

        <div className="funfact-area">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number">
                  <span
                    className="odometer odometer-theme-default"
                    data-count="5"
                  >
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
                  <span
                    className="odometer odometer-theme-default"
                    data-count="50"
                  >
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
                  <span
                    className="odometer odometer-theme-default"
                    data-count="100"
                  >
                    0
                  </span>
                  +
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
                  <span
                    className="odometer odometer-theme-default"
                    data-count="5"
                  >
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
};

export default Hero;
