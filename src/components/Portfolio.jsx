import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.css";

/*
 * Every project is described once here and rendered into both the grid card
 * and its detail popup. The old markup repeated each project twice by hand,
 * which is how all four cards ended up sharing one description and how the
 * category classes drifted out of sync with the filter buttons.
 */
const PROJECTS = [
  {
    id: "portfolio-wrapper1",
    title: "GrandBitVerse",
    client: "GrandBitVerse",
    category: "fintech",
    tag: "Crypto",
    date: "August 20, 2023",
    year: "2023",
    image: "/assets/img/portfolio/2.png",
    url: "https://grandbitverse.netlify.app",
    blurb:
      "A cryptocurrency trading resource that makes market information easy to follow at a glance.",
    description: [
      "GrandBitVerse is a cryptocurrency trading resource built to make a fast-moving market readable for newcomers and regulars alike.",
      "The site pairs clear market information with explainer content, so visitors can find a price and understand the thinking behind it in the same visit.",
      "It was designed mobile-first and shipped on schedule, with page weight kept low so it stays quick on the connections its audience actually uses.",
    ],
  },
  {
    id: "portfolio-wrapper2",
    title: "SwiftGrand",
    client: "SwiftGrandWealth",
    category: "fintech",
    tag: "Banking",
    date: "January 10, 2023",
    year: "2023",
    image: "/assets/img/portfolio/1.png",
    url: "https://swiftgrand.netlify.app",
    blurb:
      "An online banking platform focused on secure, straightforward everyday money management.",
    description: [
      "SwiftGrandWealth is an online banking platform offering secure, convenient and efficient financial management to its customers.",
      "The interface puts balances, transfers and history within easy reach, keeping the everyday tasks people log in for on the shortest possible path.",
      "Because it handles financial data, the build treats clarity and trust as features: predictable navigation, obvious confirmation steps, and no surprises.",
    ],
  },
  {
    id: "portfolio-wrapper3",
    title: "Hospital Management System",
    client: "Ancilla Catholic Hospitals Foundation",
    category: "healthcare",
    tag: "Healthcare",
    date: "2026",
    year: "2026",
    image: "/assets/img/portfolio/hms-web.jpg",
    url: "https://hms-six-psi.vercel.app/",
    blurb:
      "A staff portal for a multi-branch Catholic hospital group, with each site signing in to its own dashboard.",
    description: [
      "A management system for the Ancilla Catholic Hospitals Foundation, covering Holy Family Hospital & Maternity and its sister branches under one login.",
      "Staff choose their branch as they sign in, so the same deployment serves every site while keeping each one's data and dashboard separate.",
      "The interface is deliberately plain and high-contrast: hospital staff use it during shifts, so speed and legibility matter more than decoration.",
    ],
  },
  {
    id: "portfolio-wrapper4",
    title: "SIWES IT Portal",
    client: "HRN",
    category: "education",
    tag: "Education",
    date: "2026",
    year: "2026",
    image: "/assets/img/portfolio/siwes-web.jpg",
    url: "https://fpno-advance-siwes-management-syste.vercel.app/",
    blurb:
      "An all-in-one portal for running student industrial training, from placement through to final assessment.",
    description: [
      "The SIWES IT Portal is HRN's platform for managing student clinical work experience, bringing placement, supervision and assessment into one system.",
      "Students register placements and submit weekly logbooks online instead of on paper, while institutional and industry supervisors review and sign off in a shared workspace.",
      "Assessment and grading workflows, accredited record generation and real-time notifications close the loop, so nothing depends on a form being carried between offices.",
    ],
  },
];

const FILTERS = [
  { value: "all", label: "All" },
  { value: "fintech", label: "Fintech" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
];

const countFor = (value) =>
  value === "all"
    ? PROJECTS.length
    : PROJECTS.filter((p) => p.category === value).length;

const Portfolio = () => {
  const [active, setActive] = useState("all");
  const gridRef = useRef(null);

  // Reveal the cards once the grid scrolls into view.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    if (typeof IntersectionObserver === "undefined") {
      grid.classList.add("is-visible");
      return;
    }
    const reveal = () => {
      grid.classList.add("is-visible");
      io.disconnect();
      clearTimeout(timer);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal();
      },
      { threshold: 0.12 }
    );
    io.observe(grid);
    // The cards start at opacity 0, so if the observer never reports (a
    // background tab defers callbacks) they would stay invisible. Reveal
    // them regardless after a short grace period.
    const timer = setTimeout(reveal, 1500);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const visible = PROJECTS.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <>
      <section className="portfolio-section works" id="works-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Recent Works
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  A selection of recent projects, built end to end and shipped
                  for real clients.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="works-filter">
                <div
                  className="works-filter__group"
                  role="group"
                  aria-label="Filter projects by category"
                >
                  {FILTERS.map((f) => (
                    <button
                      key={f.value}
                      type="button"
                      className="works-filter__btn"
                      aria-pressed={active === f.value}
                      onClick={() => setActive(f.value)}
                    >
                      {f.label}
                      <span className="works-filter__count">
                        {countFor(f.value)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="works-grid" ref={gridRef}>
                {PROJECTS.map((p) => {
                  const shown = visible.includes(p);
                  return (
                    <article
                      /* Cards stay mounted and are hidden with the `hidden`
                         attribute rather than unmounted, so the Magnific
                         Popup handlers bound at startup survive filtering. */
                      key={p.id}
                      className={`works-card${shown ? " is-entering" : ""}`}
                      hidden={!shown}
                      style={{
                        animationDelay: `${visible.indexOf(p) * 70}ms`,
                      }}
                    >
                      <div className="works-card__media">
                        <span className="works-card__tag">{p.tag}</span>
                        <img src={p.image} alt={`${p.title} website`} loading="lazy" />
                      </div>

                      <div className="works-card__body">
                        <h3 className="works-card__title">{p.title}</h3>
                        <p className="works-card__desc">{p.blurb}</p>
                        <div className="works-card__foot">
                          <span className="works-card__meta">
                            {p.client} &middot; {p.year}
                          </span>
                          <span className="works-card__arrow" aria-hidden="true">
                            <i className="flaticon-up-right-arrow"></i>
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        data-mfp-src={`#${p.id}`}
                        className="works-card__link modal-popup"
                      >
                        View the {p.title} case study
                      </button>
                    </article>
                  );
                })}

                {visible.length === 0 && (
                  <p className="works-empty">No projects in this category yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project detail popups */}
      {PROJECTS.map((p) => (
        <div
          key={p.id}
          id={p.id}
          className="popup_content_area zoom-anim-dialog mfp-hide"
        >
          <div className="popup_modal_img">
            <img src={p.image} alt={`${p.title} website`} />
          </div>
          <div className="popup_modal_content">
            <div className="portfolio_info">
              <div className="portfolio_info_text">
                <h2 className="title">{p.title}</h2>
                <div className="desc">
                  {p.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn tj-btn-primary"
                  >
                    live preview <i className="fal fa-arrow-right"></i>
                  </a>
                )}
              </div>
              <div className="portfolio_info_items">
                <div className="info_item">
                  <div className="key">Category</div>
                  <div className="value">{p.tag}</div>
                </div>
                <div className="info_item">
                  <div className="key">Client</div>
                  <div className="value">{p.client}</div>
                </div>
                <div className="info_item">
                  <div className="key">Project Date</div>
                  <div className="value">{p.date}</div>
                </div>
                <div className="info_item">
                  <div className="key">Designer</div>
                  <div className="value">
                    <a href="/">MkstanCreative</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Portfolio;
