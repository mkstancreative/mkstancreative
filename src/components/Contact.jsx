import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 order-2 order-md-1">
              <div
                className="contact-form-box wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="section-header">
                  <h2 className="section-title">Let’s work together!</h2>
                  <p>
                    I design and code beautifully simple things and i love what
                    i do. Just simple like that!
                  </p>
                </div>

                <div className="tj-contact-form">
                  <form id="contact-form">
                    <div className="row gx-3">
                      <div className="col-sm-6">
                        <div className="form_group">
                          <input
                            type="text"
                            name="conName"
                            id="conName"
                            placeholder="First name"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <input
                            type="text"
                            name="conLName"
                            id="conLName"
                            placeholder="Last name"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <input
                            type="email"
                            name="conEmail"
                            id="conEmail"
                            placeholder="Email address"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <input
                            type="tel"
                            name="conPhone"
                            id="conPhone"
                            placeholder="Phone number"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form_group">
                          <select
                            name="conService"
                            id="conService"
                            className="tj-nice-select"
                          >
                            <option value="" selected disabled>
                              Choose Service
                            </option>
                            <option value="braning">UI/UX Design</option>
                            <option value="web">Digital Marketing</option>
                            <option value="uxui">Front End</option>
                            <option value="app">Back End</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form_group">
                          <textarea
                            name="conMessage"
                            id="conMessage"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form_btn">
                          <button type="submit" className="btn tj-btn-primary">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
              <div className="contact-info-list">
                <ul className="ul-reset">
                  <li
                    className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                    data-wow-delay=".4s"
                  >
                    <div className="icon-box">
                      <i className="flaticon-phone-call"></i>
                    </div>
                    <div className="text-box">
                      <p>Phone</p>
                      <a href="tel:+2347068265165">+234 706826 5165</a>
                    </div>
                  </li>
                  <li
                    className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <div className="icon-box">
                      <i className="flaticon-mail-inbox-app"></i>
                    </div>
                    <div className="text-box">
                      <p>Email</p>
                      <a href="mailto:contact@mkstancreative.com">
                        contact@mkstancreative.com
                      </a>
                    </div>
                  </li>
                  <li
                    className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                    data-wow-delay=".6s"
                  >
                    <div className="icon-box">
                      <i className="flaticon-location"></i>
                    </div>
                    <div className="text-box">
                      <p>Address</p>
                      <a href="#">
                        Man Made Plaza Ikenegbu Owerri, <br />
                        Imo State, Nigeria
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <div className="modal contact_modal" id="message_sent" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title">
                <strong>Message Sent Successfully</strong>
              </span>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Thank you for contacting us. We will get back to you shortly.
                <br />
                Have a great day!
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal contact_modal failed"
        id="message_fail"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title">
                <strong>Error</strong>
              </span>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>Oops! Something went wrong, please try again.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
