import React from "react";

const Services = () => {
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
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">01</span>
                    <h3 className="service-title">UI/UX Design</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      We create visually appealing and user-friendly interfaces
                      that enhance the overall user experience of websites and
                      applications, By prioritizing user needs and preferences.
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
                  className="service-item current d-flex flex-wrap align-items-center wow fadeInUp"
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
                    <span className="number">02</span>
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
          <img src="./assets/img/services/modal-img.jpg" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">UI/UX Designing</h2>
                    <div className="desc">
                      <p>
                        Our design involves creating intuitive and visually
                        appealing interfaces your websites and applications...
                      </p>
                      <p>
                        Hence the UI design focuses on the look and feel of the
                        interface...
                      </p>
                      <p>
                        Together, the UI/UX design aims to create seamless,
                        engaging, and memorable experiences for users...
                      </p>
                    </div>
                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Delivering UI/UX services involves several key steps...
                      </p>
                    </div>
                    <ul>
                      <li>Discovery Phase</li>
                      <li>Planning and Strategy</li>
                      <li>Wireframing and Prototyping</li>
                      <li>Visual Design</li>
                      <li>Usability Testing</li>
                      <li>Implementation and Handoff</li>
                      <li>Launch and Evaluation</li>
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
                          <i className="flaticon-design"></i> ADOBE XD
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i> FIGMA
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i> Framer
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i> InVision
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ui-design"></i> User Testing
                          Tools
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
          <img src="./assets/img/services/modal-img.jpg" alt="" />
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
                        Experience the epitome of digital marketing excellence
                        with our comprehensive suite of services...
                      </p>
                      <p>
                        Harness the power of data-driven insights and innovative
                        techniques to connect with your audience...
                      </p>
                      <p>
                        Our team of experts crafts meticulously tailored
                        solutions that transcend conventional boundaries...
                      </p>
                    </div>
                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        The digital marketing process typically involves several
                        key steps...
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
                          <i className="flaticon-design"></i> WordPress
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i> Google Ads
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i> Facebook Ads
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i> Mailchimp
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ui-design"></i> Google Work
                          Space
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
          <img src="./assets/img/services/modal-img.jpg" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">FRONT END</h2>
                    <div className="desc">
                      <p>
                        Your front-end development serves as the digital face of
                        your business...
                      </p>
                      <p>
                        A responsive and visually appealing front-end not only
                        captivates your audience...
                      </p>
                      <p>
                        By prioritizing consistency, performance, and
                        inclusivity in your front-end strategy...
                      </p>
                    </div>
                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Delivering front-end development services involves
                        several key steps...
                      </p>
                    </div>
                    <ul>
                      <li>Initial Consultation and Requirement Gathering</li>
                      <li>Wireframing and Prototyping</li>
                      <li>Design Implementation</li>
                      <li>Front-end Development</li>
                      <li>Accessibility and Cross-Browser Compatibility</li>
                      <li>Performance Optimization</li>
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
                          <i className="flaticon-design"></i> HTML
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i> CSS
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i> JavaScript
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i> REACT JS
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
          <img src="./assets/img/services/modal-img.jpg" alt="" />
        </div>
        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">BACK END</h2>
                    <div className="desc">
                      <p>
                        Discover the backbone of your digital presence with our
                        meticulously crafted backend services...
                      </p>
                      <p>
                        Our team of seasoned professionals leverages
                        cutting-edge technologies...
                      </p>
                      <p>
                        With our comprehensive backend services, you can trust
                        in the reliability...
                      </p>
                    </div>
                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Delivering front-end development services involves
                        several key steps...
                      </p>
                    </div>
                    <ul>
                      <li>Initial Consultation and Requirement Gathering</li>
                      <li>Wireframing and Prototyping</li>
                      <li>Design Implementation</li>
                      <li>Front-end Development</li>
                      <li>Accessibility and Cross-Browser Compatibility</li>
                      <li>Performance Optimization</li>
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
                          <i className="flaticon-design"></i> Node.js & Express
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i> PHP
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i> JavaScript
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i> REACT JS
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
    </>
  );
};

export default Services;
