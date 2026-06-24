import React from "react";

const Resume = () => {
  return (
    <section className="resume-section" id="resume-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".3s">
              <h2 className="section-title">My Experience</h2>
            </div>

            <div className="resume-widget">
              <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
                <div className="time">2022 - Present</div>
                <h3 className="resume-title">Full Stack Developer</h3>
                <div className="institute">Remote</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                <div className="time">2020 - 2022</div>
                <h3 className="resume-title">Front End Developer</h3>
                <div className="institute">Owerri, Nigeria</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                <div className="time">2018 - 2020</div>
                <h3 className="resume-title">Front End Developer</h3>
                <div className="institute">Owerri, Nigeria</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".7s">
                <div className="time">2016 - 2018</div>
                <h3 className="resume-title">Digital Marketing Manager</h3>
                <div className="institute">Warri, Nigeria</div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".4s">
              <h2 className="section-title">My Education</h2>
            </div>

            <div className="resume-widget">
              <div className="resume-item wow fadeInRight" data-wow-delay=".5s">
                <div className="time">2020 - 2021</div>
                <h3 className="resume-title">Software Engineering</h3>
                <div className="institute">APTECH Education</div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".6s">
                <div className="time">2015 - 2020</div>
                <h3 className="resume-title">Civil Engineering</h3>
                <div className="institute">Imo State University</div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".7s">
                <div className="time">2010 - 2015</div>
                <h3 className="resume-title">
                  West Africa Examination Council
                </h3>
                <div className="institute">Young Scientist College</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
