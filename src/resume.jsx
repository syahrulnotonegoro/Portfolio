
import { useState } from "react";

import {
  GraduationCap,
  BriefcaseBusiness,
  FolderKanban,
  Users,
  Award,
} from "lucide-react";

import "./resume.css";

/* ======================================
   EDUCATION
====================================== */

const education = [
  {
    title: "UNIVERSITY OF RIAU",
    date: "2022 – 2026",
    role: "Bachelor of Computer Science, Information Systems",
    description:
      "GPA: 3.63 / 4.00. Focus on data science, data analytics, and business intelligence.",
  },
  {
    title: "SMAN 1 PANGKALAN KERINCI",
    date: "2019 – 2022",
    role: "Science Program",
    description:
      "Completed secondary education with a focus on sciences and research.",
  },
];

/* ======================================
   REWARD & CERTIFICATION
====================================== */

const certifications = [
  {
    title: "DICODING ACADEMY",
    date: "2025",
    role: "Coding Camp 2025",
    points: [
      "Participated in a technology-focused learning program.",
      "Developed knowledge in programming and machine learning.",
    ],
  },
  {
    title: "ORACLE TALENT SCOUTING ACADEMY",
    date: "2025",
    role: "Technology Development Program",
    points: [
      "Participated in professional technology development training.",
    ],
  },
];

/* ======================================
   PROFESSIONAL EXPERIENCE
====================================== */

const professionalExperience = [
  {
    title: "BADAN PUSAT STATISTIK (BPS) KOTA PEKANBARU",
    date: "Sep 2026 – Mar 2027",
    role: "Computer Systems Assistant – MagangHub",
    points: [
      "Performed data cleaning, inspection, and validation to ensure data consistency and completeness.",
      "Reviewed and cross-checked population, civil servant, and thematic datasets based on available sources and applicable requirements.",
      "Supported the processing and verification of business census data, including MSMEs and large-scale enterprises.",
    ],
  },
  {
    title: "AWAL BROS HOSPITAL AHMAD YANI",
    date: "Jan – Feb 2025",
    role: "IT Support Intern",
    points: [
      "Resolved first-level hardware, software, and network issues to support daily user operations.",
      "Maintained computer equipment and workstations while performing network connectivity and LAN infrastructure checks.",
    ],
  },
];

/* ======================================
   PROJECT EXPERIENCE
====================================== */

const projects = [
  {
    title: "CUSTOMER PURCHASE PATTERN ANALYSIS USING FP-GROWTH",
    date: "Feb – Jun 2026",
    role: "Undergraduate Thesis – Universitas Riau",
    points: [
      "Developed a data mining workflow using Python, covering data preprocessing and association rule analysis.",
      "Analyzed 4,667 sales transactions using FP-Growth to identify frequently purchased product combinations.",
      "Generated association rules to support product bundling recommendations and inventory management strategies.",
    ],
  },
  {
    title: "E-COMMERCE PRODUCT RECOMMENDATION SYSTEM USING BIG DATA",
    date: "Nov 2025",
    role: "Academic Research – Universitas Riau",
    points: [
      "Designed a MongoDB-based product recommendation system using collaborative filtering.",
      "Implemented K-Means Clustering and K-Nearest Neighbors (KNN) to analyze user and product similarities.",
      "Applied CSR Sparse Matrix and Cosine Similarity to generate product recommendations.",
    ],
  },
  {
    title: "AUTOMOTIVE CUSTOMER SEGMENTATION USING MACHINE LEARNING",
    date: "Jun 2025",
    role: "Academic Research – Universitas Riau",
    points: [
      "Applied K-Means Clustering to 23,907 transaction records.",
      "Evaluated clustering performance using the Elbow Method and Silhouette Score.",
      "Developed marketing and CRM recommendations based on customer segments.",
    ],
  },
];

/* ======================================
   ORGANIZATIONAL EXPERIENCE
====================================== */

const organizations = [
  {
    title: "IKATAN PELAJAR MAHASISWA PANGKALAN KERINCI",
    date: "Mar 2024 – Present",
    role: "Head of Human Resources Division",
    points: [
      "Designed and coordinated member training and development programs to improve participation and organizational effectiveness.",
    ],
  },
  {
    title: "BEM FMIPA UNIVERSITAS RIAU",
    date: "Feb 2024 – Jan 2025",
    role: "Head of Partnership Division",
    points: [
      "Managed communication and negotiations with companies, organizations, and prospective partners and sponsors.",
      "Maintained stakeholder relationships to encourage sustainable partnerships.",
    ],
  },
  {
    title: "COMPUTER SCIENCE FESTIVAL – UNIVERSITAS RIAU",
    date: "Aug – Oct 2025",
    role: "Head of Sponsorship Division",
    points: [
      "Coordinated sponsorship acquisition and partnership development through proposal preparation and outreach.",
    ],
  },
  {
    title: "MERDEKA STUDENT EXCHANGE PROGRAM (PMM)",
    date: "Feb – Aug 2024",
    role: "Deputy Group Leader – Universitas Padjadjaran",
    points: [
      "Coordinated more than 210 student participants and facilitated communication between students, committees, and program administrators.",
    ],
  },
];

/* ======================================
   TIMELINE COMPONENT
====================================== */

function TimelineGroup({ title, icon: Icon, items }) {
  return (
    <div className="resume-group">
      <h3 className="resume-group-title">
        <Icon size={19} strokeWidth={1.8} />

        <span>{title}</span>
      </h3>

      <div className="timeline">
        {items.map((item) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-header">
              <h4 className="timeline-title">
                {item.title}
              </h4>

              <span className="timeline-date">
                {item.date}
              </span>
            </div>

            <p className="timeline-role">
              {item.role}
            </p>

            {item.description && (
              <p className="timeline-description">
                {item.description}
              </p>
            )}

            {item.points && (
              <ul>
                {item.points.map((point, index) => (
                  <li key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ======================================
   MAIN RESUME COMPONENT
====================================== */

function Resume() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="resume-section" id="resume">

      {/* HEADING */}

      <div className="resume-heading">
        <span className="resume-subtitle">
          MY PROFESSIONAL JOURNEY
        </span>

        <h2>
          My <span>Resume</span>
        </h2>

        <div className="resume-heading-line"></div>

        <p>
          Summary of my professional journey and achievements
          that reflect my dedication to technology and digital development.
        </p>
      </div>

      {/* RESUME COLUMNS */}

      <div className="resume-columns">

        {/* LEFT COLUMN */}

        <div className="resume-column">

          <TimelineGroup
            title="Education"
            icon={GraduationCap}
            items={education}
          />

          <TimelineGroup
            title="Reward & Certification"
            icon={Award}
            items={certifications}
          />

          {/* PROJECT EXPERIENCE */}

          <div
            className={`resume-more-content ${
              showMore ? "expanded" : ""
            }`}
          >
            <div className="resume-more-content-inner">
              <TimelineGroup
                title="Project Experience"
                icon={FolderKanban}
                items={projects}
              />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="resume-column">

          <TimelineGroup
            title="Professional Experience"
            icon={BriefcaseBusiness}
            items={professionalExperience}
          />

          {/* ORGANIZATIONAL EXPERIENCE */}

          <div
            className={`resume-more-content ${
              showMore ? "expanded" : ""
            }`}
          >
            <div className="resume-more-content-inner">
              <TimelineGroup
                title="Organizational Experience"
                icon={Users}
                items={organizations}
              />
            </div>
          </div>

        </div>

      </div>

      {/* VIEW MORE BUTTON */}

      <div className="resume-footer">
        <button
          type="button"
          className="resume-more-button"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore
            ? "Show Less Info"
            : "View More Details"}
        </button>
      </div>

    </section>
  );
}

export default Resume;
