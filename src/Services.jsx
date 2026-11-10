
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Data Validation",
    description:
      "Ensuring data quality and accuracy through data inspection, cleaning, and validation processes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.3 2.3 4.7-4.7" />
      </svg>
    ),
    color: "blue",
  },
  {
    number: "02",
    title: "Data Analysis",
    description:
      "Processing and analyzing data using Python, SQL, and Excel to uncover valuable insights.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 20h18" />
        <path d="M6 20v-7h4v7" />
        <path d="M10 13V7h4v13" />
        <path d="M14 7V3h4v17" />
      </svg>
    ),
    color: "orange",
  },
  {
    number: "03",
    title: "Data Visualization",
    description:
      "Presenting data through visualizations and interactive dashboards using Power BI and other visualization tools.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 4v16h17" />
        <path d="m7 14 4-4 3 3 6-7" />
        <path d="M16 6h4v4" />
      </svg>
    ),
    color: "purple",
  },
  {
    number: "04",
    title: "Business Intelligence",
    description:
      "Developing data-driven dashboards and reports to support performance monitoring and business decision-making.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 9v12" />
        <path d="M12 13h6" />
        <path d="M12 16h6" />
      </svg>
    ),
    color: "pink",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-heading">
          <span className="services-eyebrow">WHAT I DO</span>
          <h2>Services</h2>
          <div className="services-line"></div>
          <p>
            Professional services focused on data quality,
            analytics, visualization, and business intelligence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className={`service-icon ${service.color}`}>
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
