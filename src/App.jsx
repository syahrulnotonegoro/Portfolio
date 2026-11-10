import Services from "./Services";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import "./App.css";
import profile from "./assets/syahrul.jpeg";
import Resume from "./resume";
import {
  GraduationCap,
  Code2,
  Database,
  BrainCircuit,
  ChartColumn,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  House,
  UserRound,
  FileText,
  Images,
  Server,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import background from "./assets/bg.png";
import "./App.css";

const roles = [
  "Data Scientist",
  "Business Intelligence",
  "Data Analyst",
];

const navigation = [
  { icon: House, label: "Home", href: "#home" },
  { icon: UserRound, label: "About", href: "#about" },
  { icon: FileText, label: "Resume", href: "#resume" },
  { icon: Images, label: "Portfolio", href: "#portfolio" },
  { icon: Server, label: "Services", href: "#services" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!deleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentRole.slice(0, displayText.length + 1)
        );
      }, 100);
    } else if (!deleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1800);
    } else if (deleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 45);
    } else if (deleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex]);

  // Detect active navigation section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.label.toLowerCase());

      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* Sidebar Navigation */}
      <nav className="side-nav">
        {navigation.map((item) => {
          const Icon = item.icon;
          const section = item.label.toLowerCase();

          return (
            <a
              key={item.label}
              href={item.href}
              className={`nav-item ${
                activeSection === section ? "active" : ""
              }`}
              title={item.label}
              aria-label={item.label}
            >
              <Icon size={23} strokeWidth={1.8} />
              <span className="nav-tooltip">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Home / Hero */}
      <section
        className="hero"
        id="home"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          

          <h1>Syahrul Ramadhan Noto Negoro </h1>

          <p className="profession">
            I'm <span className="typed-text">{displayText}</span>
            <span className="cursor">|</span>
          </p>


        
{/* Social Media */}
<div className="social-links">
  <a href="https://www.facebook.com/syahrul.albayan" aria-label="Facebook">
    <FaFacebookF size={22} />
  </a>

  <a href="https://www.instagram.com/syahrulr.n/" aria-label="Instagram">
    <FaInstagram size={22} />
  </a>

  <a href="https://www.linkedin.com/in/syahrulrn/" aria-label="LinkedIn">
    <FaLinkedinIn size={22} />
  </a>

  <a href="https://github.com/syahrulnotonegoro" aria-label="GitHub">
    <FaGithub size={22} />
  </a>
</div>
        </div>

        <div className="hero-bottom">
          <span>DATA · TECHNOLOGY · INNOVATION</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* About */}
      
{/* ABOUT SECTION */}
<section className="about-section" id="about">

  <div className="section-heading">
    <span className="section-subtitle">GET TO KNOW ME</span>
    <h2>About <span>Me</span></h2>
    <div className="heading-line"></div>
    <p>
      A little introduction about my background,
      education, and expertise.
    </p>
  </div>

  <div className="about-container">

    {/* PROFILE IMAGE */}
    <div className="about-image-wrapper">
      <div className="about-image-border"></div>

      <img
        src={profile}
        alt="Syahrul - Personal Profile"
        className="about-image"
      />

      <div className="image-caption">
        <span className="status-dot"></span>
        DATA ENTHUSIAST
      </div>
    </div>

    {/* PROFILE INFORMATION */}
    <div className="about-details">

      <span className="about-label">WHO I AM</span>

      <h3>
        Turning Data Into
        <span> Meaningful Insights.</span>
      </h3>

      <p className="about-description">
        An Information Systems graduate from Universitas Riau
        with hands-on experience in data processing, validation,
        Data Mining, and Machine Learning projects. Proficient
        in Python, SQL, and data visualization, with a strong
        interest in Data Science and Business Intelligence.
        Passionate about turning data into actionable insights
        and solving real-world problems through data-driven approaches.
      </p>

      {/* EDUCATION */}
      <div className="about-info-card">

        <div className="info-icon">
          <GraduationCap size={25} />
        </div>

        <div className="info-content">
          <span>EDUCATION</span>
          <h4>University of Riau</h4>
          <p>Bachelor of Computer</p>
           <p>GPA 3.63/4.00</p>
        </div>

      </div>

      {/* TECHNICAL SKILLS */}
      
{/* TECHNICAL SKILLS */}
<div className="skills-container">

  <div className="skills-heading">
    <Code2 size={22} />
    <h4>Technical Skills</h4>
  </div>

  <p className="skills-description">
    My technical expertise in data analysis,
    data science, and business intelligence.
  </p>

  <div className="skills-grid">

    {[
      { name: "Python", level: 90 },
      { name: "SQL & Database", level: 90 },
      { name: "Power BI", level: 75 },
      { name: "Microsoft Office", level: 90 },
      { name: "Machine Learning", level: 90 },
      { name: "Data Mining", level: 90 },
      { name: "Data Visualization", level: 75 },
      { name: "Statistics", level: 75 },
    ].map((skill) => (
      <div className="skill-item" key={skill.name}>

        <div className="skill-info">
          <span className="skill-name">
            {skill.name}
          </span>

          <span className="skill-percentage">
            {skill.level}%
          </span>
        </div>

        <div
          className="skill-progress"
          role="progressbar"
          aria-label={skill.name}
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="skill-progress-bar"
            style={{ width: `${skill.level}%` }}
          />
        </div>

      </div>
    ))}

  </div>
</div>


    </div>

  </div>

</section>

      {/* Resume */}
      <Resume />

      {/* Portfolio */}
      <Portfolio />

      {/* Services */}
<Services />

{/* Contact */}
<Contact />

{/* Footer */}
<Footer />
    </main>
  );
}

export default App;
