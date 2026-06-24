import React from "react";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-section" id="works-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Recent Works
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  We put your ideas and thus your wishes in the form of a unique
                  web project that inspires you and you customers.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div
                className="portfolio-filter text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="button-group filter-button-group">
                  <button data-filter="*" className="active">
                    All
                  </button>
                  <button data-filter=".uxui">Next</button>
                  <button data-filter=".branding">Branding</button>
                  <button data-filter=".mobile-app">Crypto</button>
                  <div className="active-bg"></div>
                </div>
              </div>

              <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
                <div className="portfolio-sizer"></div>
                <div className="gutter-sizer"></div>
                <div className="portfolio-item branding">
                  <div className="image-box">
                    <img src="assets/img/portfolio/2.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">GrandBitVerse</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#portfolio-wrapper1"
                      className="portfolio-link modal-popup"
                    ></button>
                  </div>
                </div>
                <div className="portfolio-item uxui">
                  <div className="image-box">
                    <img src="assets/img/portfolio/1.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">SwiftGrand</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#portfolio-wrapper2"
                      className="portfolio-link modal-popup"
                    ></button>
                  </div>
                </div>
                <div className="portfolio-item mobile-app">
                  <div className="image-box">
                    <img src="assets/img/portfolio/3.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">ExperVista</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#portfolio-wrapper3"
                      className="portfolio-link modal-popup"
                    ></button>
                  </div>
                </div>
                <div className="portfolio-item branding">
                  <div className="image-box">
                    <img src="assets/img/portfolio/4.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">BoomTrade</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#portfolio-wrapper4"
                      className="portfolio-link modal-popup"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Popups */}
      <div
        id="portfolio-wrapper1"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="./assets/img/portfolio/2.png" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="portfolio_info">
            <div className="portfolio_info_text">
              <h2 className="title">GrandBitVerse</h2>
              <div className="desc">
                <p>
                  Welcome to GrandBitVerse, your ultimate cryptocurrency trading
                  resource! Here, we delve into the world of cryptography...
                </p>
              </div>
              <a
                href="https://grandbitverse.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="btn tj-btn-primary"
              >
                live preview <i className="fal fa-arrow-right"></i>
              </a>
            </div>
            <div className="portfolio_info_items">
              <div className="info_item">
                <div className="key">Category</div>
                <div className="value">Web Design</div>
              </div>
              <div className="info_item">
                <div className="key">Client</div>
                <div className="value">GrandBitVerse</div>
              </div>
              <div className="info_item">
                <div className="key">Project Date</div>
                <div className="value">August 20, 2023</div>
              </div>
              <div className="info_item">
                <div className="key">Designer</div>
                <div className="value">
                  <a href="#">MkstanCreative</a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio_gallery owl-carousel"></div>
        </div>
      </div>

      <div
        id="portfolio-wrapper2"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="./assets/img/portfolio/1.png" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="portfolio_info">
            <div className="portfolio_info_text">
              <h2 className="title">SwiftGrand</h2>
              <div className="desc">
                <p>
                  Welcome to SwiftGrandWealth an online banking platform which
                  offers secure, convenient, and efficient financial management
                  solutions...
                </p>
              </div>
              <a
                href="https://swiftgrand.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="btn tj-btn-primary"
              >
                live preview <i className="fal fa-arrow-right"></i>
              </a>
            </div>
            <div className="portfolio_info_items">
              <div className="info_item">
                <div className="key">Category</div>
                <div className="value">Web Design</div>
              </div>
              <div className="info_item">
                <div className="key">Client</div>
                <div className="value">SwiftGrandWealth</div>
              </div>
              <div className="info_item">
                <div className="key">Project Date</div>
                <div className="value">January 10, 2023</div>
              </div>
              <div className="info_item">
                <div className="key">Designer</div>
                <div className="value">
                  <a href="#">MkstanCreative</a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio_gallery owl-carousel"></div>
        </div>
      </div>

      <div
        id="portfolio-wrapper3"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="./assets/img/portfolio/3.png" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="portfolio_info">
            <div className="portfolio_info_text">
              <h2 className="title">ExperVista</h2>
              <div className="desc">
                <p>
                  Welcome to ExperVista, your ultimate cryptocurrency trading
                  resource! Here, we dive into the world of cryptography...
                </p>
              </div>
              <a
                href="https://expervistagroup.netlify.app"
                className="btn tj-btn-primary"
              >
                live preview <i className="fal fa-arrow-right"></i>
              </a>
            </div>
            <div className="portfolio_info_items">
              <div className="info_item">
                <div className="key">Category</div>
                <div className="value">Web Design</div>
              </div>
              <div className="info_item">
                <div className="key">Client</div>
                <div className="value">ExperVistaGroup</div>
              </div>
              <div className="info_item">
                <div className="key">Start Date</div>
                <div className="value">March 9, 2023</div>
              </div>
              <div className="info_item">
                <div className="key">Designer</div>
                <div className="value">
                  <a href="#">MkstanCreative</a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio_gallery owl-carousel"></div>
        </div>
      </div>

      <div
        id="portfolio-wrapper4"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="./assets/img/portfolio/4.png" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="portfolio_info">
            <div className="portfolio_info_text">
              <h2 className="title">BoomTrade</h2>
              <div className="desc">
                <p>
                  Welcome to BoomTrade, your ultimate cryptocurrency trading
                  resource! Here, we explore the world of cryptography...
                </p>
              </div>
              <a
                href="https://boomtradehub.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="btn tj-btn-primary"
              >
                live preview <i className="fal fa-arrow-right"></i>
              </a>
            </div>
            <div className="portfolio_info_items">
              <div className="info_item">
                <div className="key">Category</div>
                <div className="value">Web Design</div>
              </div>
              <div className="info_item">
                <div className="key">Client</div>
                <div className="value">BoomTrade Hub</div>
              </div>
              <div className="info_item">
                <div className="key">Project Date</div>
                <div className="value">April 14, 2023</div>
              </div>
              <div className="info_item">
                <div className="key">Designer</div>
                <div className="value">
                  <a href="#">MkstanCreative</a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio_gallery owl-carousel"></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
