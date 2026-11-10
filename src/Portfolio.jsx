import { useState } from "react";
import "./Portfolio.css";

/* =====================================
   PROJECT HISTORY
===================================== */

const projects = [
  {
    title: "Analisis Pola Pembelian Pancake dengan FP-Growth",
    category: "Data Mining",
    description:
      "Analisis pola pembelian menu menggunakan algoritma FP-Growth untuk menemukan kombinasi produk yang sering dibeli bersama.",
    driveId: "1SDcn8BMm0pjYe-sEA_HK_BUiqJZj2Zjn",
    pdf: "https://drive.google.com/file/d/1SDcn8BMm0pjYe-sEA_HK_BUiqJZj2Zjn/view",
    tag: "RESEARCH",
  },
  {
    title: "E-Commerce Product Recommendation System",
    category: "Machine Learning",
    description:
      "Pengembangan sistem rekomendasi produk menggunakan collaborative filtering dan analisis kemiripan produk.",
    driveId: "18UdMau-3OniUgVW4Q1QY3fDvImEi8PDI",
    pdf: "https://drive.google.com/file/d/18UdMau-3OniUgVW4Q1QY3fDvImEi8PDI/view",
    tag: "PROJECT",
  },
  {
    title: "Automotive Customer Segmentation",
    category: "Data Science",
    description:
      "Segmentasi pelanggan menggunakan algoritma K-Means Clustering berdasarkan karakteristik pelanggan.",
    driveId: "1PPyqp8kxHIOG86lAXCjwVk5HfuBHzZr_",
    pdf: "https://drive.google.com/file/d/1PPyqp8kxHIOG86lAXCjwVk5HfuBHzZr_/view",
    tag: "RESEARCH",
  },
  {
    title: "Project 4",
    category: "Academic Research",
    description:
      "Dokumentasi penelitian dan hasil pengerjaan proyek.",
    driveId: "1G9OxMSqVDafGWg-g_Ko_m1e0H3RIEi3v",
    pdf: "https://drive.google.com/file/d/1G9OxMSqVDafGWg-g_Ko_m1e0H3RIEi3v/view",
    tag: "RESEARCH",
  },
];

/* =====================================
   ACTIVITY
===================================== */

const activities = [
  { title: "BEM FMIPA Universitas Riau", year: "2024", image: "bem.jpg" },
  { title: "Computer Science Festival", year: "2024", image: "csf.jpeg" },
  { title: "Kepala Suku Pertukaran Mahasiswa", year: "2024", image: "ketupel_kwu.jpg" },
  { title: "Ketua Pelaksana Kegiatan", year: "2024", image: "kepsukpmm.jpg" },
  { title: "MagangHub BPS", year: "2026", image: "maganghub.png" },
  { title: "Pertukaran Mahasiswa Merdeka", year: "2024", image: "PMM.jpeg" },
  { title: "Kegiatan Organisasi", year: "2025", image: "pmm2.jpeg" },
  { title: "Kegiatan dan Kepanitiaan", year: "2025", image: "porwil.jpeg" },
];

/* =====================================
   CERTIFICATES
===================================== */

const certificates = [
  { title: "Pertukaran Mahasiswa", category: "Prestasi", image: "pmm 4.png" },
  { title: "Kepala Suku Pertukaran Mahasiswa", category: "Prestasi", image: "porwil.png" },

  { title: "TSA", category: "Keahlian", image: "TSA.png" },
  { title: "Microsoft Excel", category: "Keahlian", image: "basic excel.png" },
  { title: "KarirNex", category: "Keahlian", image: "Karirnex.png" },
  { title: "Java Programming", category: "Keahlian", image: "JavaProgramming.png" },
  { title: "Database Foundation", category: "Keahlian", image: "database.png" },

  { title: "TOEFL", category: "Bahasa", image: "Toefl.png" },

  { title: "BEM", category: "Organisasi", image: "BEM.png" },
  { title: "Computer Science Festival", category: "Organisasi", image: "CSF.png" },
];

/* =====================================
   IMAGE ASSETS
===================================== */

const assetFiles = import.meta.glob(
  "./assets/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

function getAsset(filename) {
  const entry = Object.entries(assetFiles).find(([path]) =>
    path.toLowerCase().endsWith("/" + filename.toLowerCase())
  );

  return entry ? entry[1] : "";
}

/* =====================================
   PORTFOLIO COMPONENT
===================================== */

function Portfolio() {
  const [activeTab, setActiveTab] = useState("Activity");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = [
    "Semua",
    "Prestasi",
    "Keahlian",
    "Bahasa",
    "Organisasi",
  ];

  const filteredCertificates =
    selectedCategory === "Semua"
      ? certificates
      : certificates.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">

        {/* HEADING */}
        <div className="portfolio-heading">
          <span className="portfolio-eyebrow">
            MY WORK & ACHIEVEMENTS
          </span>

          <h2>
            Portfolio of <span>Activities & Certificates</span>
          </h2>

          <p>
            A collection of activities, projects, and certifications
            that represent my learning journey and professional growth.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="portfolio-tabs">
          {["Activity", "Project History", "Certificates"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ACTIVITY */}
        {activeTab === "Activity" && (
          <div className="portfolio-grid">
            {activities.map((item, index) => (
              <article className="portfolio-card" key={index}>
                <button
                  className="portfolio-image-button"
                  onClick={() => setSelectedImage(getAsset(item.image))}
                >
                  <img
                    src={getAsset(item.image)}
                    alt={item.title}
                  />
                </button>

                <div className="portfolio-card-info">
                  <h3>{item.title}</h3>
                  <span>{item.year}</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* PROJECT HISTORY */}
        {activeTab === "Project History" && (
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={index}>
                <div className="project-preview">
                  <span className="project-tag">
                    {project.tag}
                  </span>

                  <iframe
                    title={`Preview ${project.title}`}
                    src={`https://drive.google.com/file/d/${project.driveId}/preview`}
                    loading="lazy"
                    allow="autoplay"
                  />
                </div>

                <div className="project-info">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-actions">
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-pdf-button"
                    >
                      <span>◎</span>
                      Baca Jurnal (PDF)
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CERTIFICATES */}
        {activeTab === "Certificates" && (
          <>
            <div className="certificate-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category ? "active" : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="portfolio-grid">
              {filteredCertificates.map((item, index) => (
                <article className="portfolio-card" key={index}>
                  <button
                    className="portfolio-image-button"
                    onClick={() => setSelectedImage(getAsset(item.image))}
                  >
                    <img
                      src={getAsset(item.image)}
                      alt={item.title}
                    />
                  </button>

                  <div className="portfolio-card-info">
                    <h3>{item.title}</h3>
                    <span>{item.category}</span>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

      </div>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="portfolio-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="portfolio-lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Portfolio preview"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}

export default Portfolio;