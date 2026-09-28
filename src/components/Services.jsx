import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    if (window.$) {
      const active_bg = window.$(".services-widget .active-bg");
      const element = window.$(".services-widget .current");

      const activeService = (active_bg, e) => {
        if (!e.length || !active_bg.length) return;
        const topOff = e.offset().top;
        const height = e.outerHeight();
        const menuTop = window.$(".services-widget").offset().top;
        e.closest(".service-item").removeClass("mleave");
        e.closest(".service-item").siblings().addClass("mleave");
        active_bg.css({
          top: topOff - menuTop + "px",
          height: height + "px",
        });
      };

      activeService(active_bg, element);
    }
  }, []);

  return (
    <>
      <section className="services-section" id="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Quality Services
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
              <div className="services-widget position-relative">
                <div
                  className="service-item current d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">01</span>
                    <h3 className="service-title">AI Mastery</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      We build and integrate practical AI into your products,
                      from LLM-powered assistants and automation to smart
                      workflows that save your team real time every day.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper1"
                    className="service-link modal-popup"
                  ></button>
                </div>
                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">02</span>
                    <h3 className="service-title">Digital Marketing</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      Implementing strategies and tactics aimed at promoting
                      products, services, or brands to target audiences through
                      digital channels. ultimately driving sales to business
                      growth.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper2"
                    className="service-link modal-popup"
                  ></button>
                </div>
                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">03</span>
                    <h3 className="service-title">Full Stack Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      We build complete web products end to end, from fast,
                      user-friendly interfaces to the secure APIs and databases
                      behind them, so every layer works together reliably and
                      scales with your business.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper3"
                    className="service-link modal-popup"
                  ></button>
                </div>

                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">04</span>
                    <h3 className="service-title">Market Place</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      Ready-made digital products you can use today, from AI
                      tools that turn long videos into short clips to practical
                      guides for landing your first clients.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper4"
                    className="service-link modal-popup"
                  ></button>
                </div>

                <div
                  className="active-bg wow fadeInUp"
                  data-wow-delay=".5s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Popups */}
      <div
        id="service-wrapper1"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="/assets/img/services/modal-img.jpg" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-12">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">AI Mastery</h2>
                    <div className="desc">
                      <p>
                        We help you put artificial intelligence to work, turning
                        large language models into features your users actually
                        rely on rather than demos that never ship.
                      </p>
                      <p>
                        That covers custom chat assistants, search and retrieval
                        over your own documents, and automating the repetitive
                        work that quietly eats your team&rsquo;s week.
                      </p>
                      <p>
                        Every build comes with real evaluation, sensible
                        guardrails and cost control, so the AI stays useful,
                        measurable and safe to put in front of customers.
                      </p>
                    </div>
                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Delivering an AI solution involves several key steps.
                      </p>
                    </div>
                    <ul>
                      <li>Use Case Discovery</li>
                      <li>Data Review and Preparation</li>
                      <li>Model and Tooling Selection</li>
                      <li>Prompt and Workflow Design</li>
                      <li>Integration and Automation</li>
                      <li>Evaluation and Testing</li>
                      <li>Deployment and Monitoring</li>
                      <li>Iterative Improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="service-wrapper2"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="/assets/img/services/modal-img.jpg" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-12">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">Digital Marketing</h2>
                    <div className="desc">
                      <p>
                        We help your business get found and get chosen online,
                        combining search visibility, paid campaigns and content
                        that speaks directly to the people you want to reach.
                      </p>
                      <p>
                        Every decision is driven by data. We track what visitors
                        actually do on your site, learn which channels bring
                        real customers, and put your budget where it earns.
                      </p>
                      <p>
                        The result is steady, measurable growth: more qualified
                        traffic, better conversion rates, and marketing spend
                        you can justify with numbers.
                      </p>
                    </div>
                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Growing a brand online follows a clear, repeatable path
                        from research through to optimisation.
                      </p>
                    </div>
                    <ul>
                      <li>Market Research</li>
                      <li>Setting Objectives</li>
                      <li>Creating a Strategy</li>
                      <li>Content Creation</li>
                      <li>Social Media Marketing</li>
                      <li>Performance Optimization</li>
                      <li>Paid Advertising</li>
                      <li>Conversion Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="service-wrapper3"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="/assets/img/services/modal-img.jpg" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-12">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">Full Stack Development</h2>
                    <div className="desc">
                      <p>
                        We build the whole product, from the interface people
                        actually touch to the databases, APIs and business logic
                        that keep it running correctly under real load.
                      </p>
                      <p>
                        Interfaces are built component by component in React,
                        fast, accessible and faithful to your brand on every
                        screen size. Behind them sit clean data models and
                        well-documented REST APIs in Node.js and PHP, so your
                        web app, mobile app and any third party share one source
                        of truth.
                      </p>
                      <p>
                        Owning both ends means fewer hand-offs and fewer gaps:
                        security, performance and reliability are designed in
                        from the start rather than patched on at the end.
                      </p>
                    </div>
                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Delivering a full stack product involves several key
                        steps.
                      </p>
                    </div>
                    <ul>
                      <li>Requirement Gathering</li>
                      <li>Wireframing and Prototyping</li>
                      <li>Database and API Design</li>
                      <li>Responsive Interface Build</li>
                      <li>Business Logic and Integration</li>
                      <li>Authentication and Security Hardening</li>
                      <li>Testing and Performance Optimization</li>
                      <li>Deployment, Monitoring and Scaling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="service-wrapper4"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_content market-popup">
          <div className="service_details">
            <div className="service_details_content">
              <div className="service_info">
                <h6 className="subtitle">SERVICES</h6>
                <h2 className="title">Market Place</h2>
                <div className="desc">
                  <p>
                    Alongside client work, we build and sell our own digital
                    products: tools and guides that solve one problem well and
                    that you can start using straight away.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <article className="market-card">
                  <a
                    className="market-card-shot"
                    href="https://mkstancreative.online/decaris/"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <span className="market-card-bar">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <img
                      src="/assets/img/products/decaris.webp"
                      alt="Decaris AI landing page: one long video in, a week of clips out"
                      width="1200"
                      height="750"
                      loading="lazy"
                    />
                  </a>
                  <div className="market-card-body">
                    <span className="market-card-tag">AI Video Tool</span>
                    <h3 className="market-card-title">Decaris AI</h3>
                    <p>
                      Turn one long video into a week of short clips. Paste a
                      YouTube link or upload a podcast, interview or sermon,
                      and Decaris AI finds the moments that stand on their
                      own, reframes them vertical and adds word-by-word
                      captions for TikTok, Reels and Shorts.
                    </p>
                    <ul className="market-card-meta">
                      <li>1080×1920 vertical</li>
                      <li>Word-by-word captions</li>
                      <li>Titles &amp; hashtags</li>
                    </ul>
                    <a
                      className="btn tj-btn-primary"
                      href="https://mkstancreative.online/decaris/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Decaris AI <i className="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-md-6">
                <article className="market-card">
                  <a
                    className="market-card-shot"
                    href="https://mkstancreative.online/va-lead-blueprint/"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <span className="market-card-bar">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <img
                      src="/assets/img/products/va-leads-blueprint.webp"
                      alt="VA Leads Blueprint landing page: land your first $25–$50/hr VA client"
                      width="1200"
                      height="750"
                      loading="lazy"
                    />
                  </a>
                  <div className="market-card-body">
                    <span className="market-card-tag">Ebook</span>
                    <h3 className="market-card-title">VA Leads Blueprint</h3>
                    <p>
                      For virtual assistants chasing their first
                      $25&ndash;$50/hr client. Build a list of 100&ndash;1,000
                      verified eCommerce and SaaS decision-makers using only
                      free tools, following an exact click-by-click process.
                    </p>
                    <ul className="market-card-meta">
                      <li>₦10,000</li>
                      <li>Instant PDF</li>
                      <li>30-day money-back</li>
                    </ul>
                    <a
                      className="btn tj-btn-primary"
                      href="https://mkstancreative.online/va-lead-blueprint/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View VA Leads Blueprint <i className="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
