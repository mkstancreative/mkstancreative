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
                    <h3 className="service-title">Front End Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      We create user-friendly interfaces that represent
                      businesses effectively online. It focuses on professional
                      design, intuitive user experience, and performance
                      optimization.
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
                    <h3 className="service-title">Back End Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      We focus on reliability, security, efficiency, and
                      scalability, which enables seamless communication between
                      front-end and back-end systems, ensuring optimal
                      performance and user satisfaction.
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
              <div className="col-lg-7 col-xl-8">
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
              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">
                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">All Services</h3>
                    </div>
                    <ul>
                      <li className="active">
                        <button>
                          <i className="flaticon-design"></i> OpenAI API
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i> Claude API
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i> LangChain
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i> Vector
                          Databases
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ui-design"></i> Prompt
                          Engineering
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar_widget contact_form">
                    <div className="widget_title">
                      <h3 className="title">Get in Touch</h3>
                    </div>
                    <form action="index.html">
                      <div className="form_group">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                      <div className="form_group">
                        <input type="email" name="semail" placeholder="Email" />
                      </div>
                      <div className="form_group">
                        <textarea
                          name="smessage"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <div className="form_btn">
                        <button className="btn tj-btn-primary" type="submit">
                          Send Message
                        </button>
                      </div>
                    </form>
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
              <div className="col-lg-7 col-xl-8">
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
              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">
                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">All Services</h3>
                    </div>
                    <ul>
                      <li className="active">
                        <button>
                          <i className="flaticon-design"></i> Google Analytics
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i> Google Ads
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i> Meta Ads
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i> Mailchimp
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ui-design"></i> SEO &amp;
                          Search Console
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar_widget contact_form">
                    <div className="widget_title">
                      <h3 className="title">Get in Touch</h3>
                    </div>
                    <form action="index.html">
                      <div className="form_group">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                      <div className="form_group">
                        <input type="email" name="semail" placeholder="Email" />
                      </div>
                      <div className="form_group">
                        <textarea
                          name="smessage"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <div className="form_btn">
                        <button className="btn tj-btn-primary" type="submit">
                          Send Message
                        </button>
                      </div>
                    </form>
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
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">Front End Development</h2>
                    <div className="desc">
                      <p>
                        The front end is the part of your product people
                        actually touch. We build interfaces that are quick to
                        understand, pleasant to use, and faithful to your brand
                        on every screen size.
                      </p>
                      <p>
                        Everything is built component by component in React, so
                        your interface stays consistent as it grows and new
                        features slot in without breaking what already works.
                      </p>
                      <p>
                        We treat speed and accessibility as requirements, not
                        extras: fast first loads, keyboard and screen-reader
                        support, and behaviour you can rely on across browsers.
                      </p>
                    </div>
                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Delivering a front end involves several key steps.
                      </p>
                    </div>
                    <ul>
                      <li>Requirement Gathering</li>
                      <li>Wireframing and Prototyping</li>
                      <li>Component and Design System Setup</li>
                      <li>Responsive Interface Build</li>
                      <li>API Integration</li>
                      <li>Accessibility and Cross-Browser Testing</li>
                      <li>Performance Optimization</li>
                      <li>Launch and Handoff</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">
                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">All Services</h3>
                    </div>
                    <ul>
                      <li className="active">
                        <button>
                          <i className="flaticon-design"></i> HTML &amp; CSS
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i> JavaScript
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i> React JS
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i> Bootstrap
                          &amp; Tailwind
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ui-design"></i> Responsive
                          Design
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar_widget contact_form">
                    <div className="widget_title">
                      <h3 className="title">Get in Touch</h3>
                    </div>
                    <form action="index.html">
                      <div className="form_group">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                      <div className="form_group">
                        <input type="email" name="semail" placeholder="Email" />
                      </div>
                      <div className="form_group">
                        <textarea
                          name="smessage"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <div className="form_btn">
                        <button className="btn tj-btn-primary" type="submit">
                          Send Message
                        </button>
                      </div>
                    </form>
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
        <div className="popup_modal_img">
          <img src="/assets/img/services/modal-img.jpg" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">Back End Development</h2>
                    <div className="desc">
                      <p>
                        The back end is everything your users never see but
                        depend on: the databases, APIs and business logic that
                        keep your product running correctly under real load.
                      </p>
                      <p>
                        We design clean data models and well-documented REST
                        APIs in Node.js and PHP, so your front end, your mobile
                        app and any third party can all talk to one source of
                        truth.
                      </p>
                      <p>
                        Security is built in from the start, with proper
                        authentication, validated input, and safe handling of
                        the data your customers trust you with.
                      </p>
                    </div>
                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Delivering a back end involves several key steps.
                      </p>
                    </div>
                    <ul>
                      <li>Requirement Gathering</li>
                      <li>Database and Data Modelling</li>
                      <li>API Design and Documentation</li>
                      <li>Business Logic Implementation</li>
                      <li>Authentication and Security Hardening</li>
                      <li>Testing and Load Handling</li>
                      <li>Deployment and Monitoring</li>
                      <li>Maintenance and Scaling</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">
                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">All Services</h3>
                    </div>
                    <ul>
                      <li className="active">
                        <button>
                          <i className="flaticon-design"></i> Node.js &amp;
                          Express
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i> PHP &amp;
                          Laravel
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i> REST APIs
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i> MySQL &amp;
                          MongoDB
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ui-design"></i> Auth &amp;
                          Security
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar_widget contact_form">
                    <div className="widget_title">
                      <h3 className="title">Get in Touch</h3>
                    </div>
                    <form action="index.html">
                      <div className="form_group">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                      <div className="form_group">
                        <input type="email" name="semail" placeholder="Email" />
                      </div>
                      <div className="form_group">
                        <textarea
                          name="smessage"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <div className="form_btn">
                        <button className="btn tj-btn-primary" type="submit">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
