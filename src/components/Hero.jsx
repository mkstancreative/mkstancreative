import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const initOdometer = () => {
      if (window.Odometer && window.$ && window.$.fn.appear) {
        const $funfactArea = window.$(".funfact-area");
        const $odometers = window.$(".odometer");
        const odometerInstances = [];

        $odometers.each(function () {
          const $el = window.$(this);
          const countNumber = $el.attr("data-count");

          const od = new window.Odometer({
            el: this,
            value: 0,
            format: countNumber.includes(".") ? "(,ddd).d" : "(,ddd)",
            theme: "default",
          });
          odometerInstances.push({ od, val: parseFloat(countNumber) });
        });

        $funfactArea.appear(function () {
          odometerInstances.forEach(({ od, val }) => {
            setTimeout(() => {
              od.update(val);
            }, 500);
          });
        });

        if ($funfactArea.is(":appeared")) {
          $funfactArea.trigger("appear");
        }
      }
    };

    const timer = setTimeout(initOdometer, 1000);
    return () => clearTimeout(timer);
  }, []);

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
                <img src="assets/img/hero/me.png" alt="" />
              </div>

              <p className="lead">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </p>
              <div className="button-box d-flex flex-wrap align-items-center">
                <a href="#" className="btn tj-btn-secondary">
                  Download CV
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
                      href="https://www.linkedin.com/mwlite/in/stanley-chidimma"
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
              <img src="assets/img/hero/me.png" alt="" />
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
                    data-count="4"
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
                    data-count="1.5"
                  >
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
                  <span
                    className="odometer odometer-theme-default"
                    data-count="4"
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
