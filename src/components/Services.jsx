import "./Services.css";

export default function Services() {
  const services = [
    {
      id: 1,
      number: "01",
      title: "UI/UX Design",
      description:
        "We create visually appealing and user-friendly interfaces that enhance the overall user experience of websites and applications, By prioritizing user needs and preferences.",
    },
    {
      id: 2,
      number: "02",
      title: "Digital Marketing",
      description:
        "Implementing strategies and tactics aimed at promoting products, services, or brands to target audiences through digital channels. ultimately driving sales to business growth.",
    },
    {
      id: 3,
      number: "03",
      title: "Front End Development",
      description:
        "We create user-friendly interfaces that represent businesses effectively online. It focuses on professional design, intuitive user experience, and performance optimization.",
    },
    {
      id: 4,
      number: "04",
      title: "Back End Development",
      description:
        "We focus on reliability, security, efficiency, and scalability, which enables seamless communication between front-end and back-end systems, ensuring optimal performance and user satisfaction.",
    },
  ];

  return (
    <section className="services-section" id="services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title">My Quality Services</h2>
              <p>
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="services-widget position-relative">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-item d-flex flex-wrap align-items-center"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">{service.number}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <div className="right-box">
                    <p>{service.description}</p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button className="service-link modal-popup"></button>
                </div>
              ))}
              <div className="active-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
