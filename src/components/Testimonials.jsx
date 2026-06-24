import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Mk Stanley did an amazing job on our website. Highly professional and delivered exactly what we needed.",
      author: "John Doe",
      company: "Tech Company",
    },
    {
      id: 2,
      content:
        "Exceptional work and great communication throughout the project. I would definitely recommend!",
      author: "Jane Smith",
      company: "Creative Agency",
    },
    {
      id: 3,
      content:
        "Outstanding UI/UX design. The attention to detail and user experience is remarkable.",
      author: "Mike Johnson",
      company: "Digital Solutions",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title">What My Clients Say</h2>
              <p>Real feedback from satisfied clients</p>
            </div>
          </div>
        </div>

        <div className="row">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6 col-lg-4">
              <div className="testimonial-item">
                <p className="testimonial-content">"{testimonial.content}"</p>
                <h5 className="testimonial-author">{testimonial.author}</h5>
                <p className="testimonial-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
