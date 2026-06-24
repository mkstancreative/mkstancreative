import React from "react";

const Skills = () => {
  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Skills
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              <div className="skill-item wow fadeInUp" data-wow-delay=".3s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/html-5.png" alt="" />
                  </div>
                </div>
                <p>HTML</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".4s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/css-3.png" alt="" />
                  </div>
                </div>
                <p>CSS</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/js.svg" alt="" />
                  </div>
                </div>
                <p>JavaScript</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/react.svg" alt="" />
                  </div>
                </div>
                <p>React JS</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/php.png" alt="" />
                  </div>
                </div>
                <p>PHP</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/node-js.png" alt="" />
                  </div>
                </div>
                <p>Node JS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
