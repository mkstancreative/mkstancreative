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
                <div className="time">2025 - Present</div>
                <h3 className="resume-title">Full Stack Developer</h3>
                <div className="institute">NetPro Africa</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                <div className="time">2023 - 2025</div>
                <h3 className="resume-title">Front End Developer</h3>
                <div className="institute">Binvabian Technologies</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                <div className="time">2021 - 2022</div>
                <h3 className="resume-title">Front End Developer</h3>
                <div className="institute">APTECH Education</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".7s">
                <div className="time">2020 - 2021</div>
                <h3 className="resume-title">Digital Marketing Manager</h3>
                <div className="institute">CreativeLab Hub</div>
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
                <div className="time">2007 - 2013</div>
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
