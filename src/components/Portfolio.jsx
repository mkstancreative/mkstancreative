import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="works-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title">My Latest Works</h2>
              <p>Check out some of my recent projects and portfolio items</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Portfolio items will be added here */}
          <div className="col-md-12">
            <p className="text-center">Portfolio items coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
