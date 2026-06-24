import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "CSS/SASS", level: 88 },
    { name: "HTML5", level: 92 },
    { name: "UI/UX Design", level: 85 },
    { name: "Node.js", level: 80 },
  ];

  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title">My Skills</h2>
              <p>A showcase of my technical expertise and proficiencies</p>
            </div>
          </div>
        </div>

        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="skill-item">
                <h4>{skill.name}</h4>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
