
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/syahrul.albayan",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/syahrulr.n/",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/syahrulrn/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/syahrulnotonegoro",
      label: "GitHub",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/6288271075800",
      label: "WhatsApp",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:syahrulnotonegoro@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-brand">
            <h2>
              Syahrul<span>.</span>
            </h2>

            <p>
              Turning data into meaningful insights.
              Passionate about Data Analysis, Data Science,
              and Business Intelligence.
            </p>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © 2026 <span>Syahrul Ramadhan Noto Negoro.</span>
            {" "}All Rights Reserved.
          </p>

          <a
            href="#home"
            className="footer-back-top"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
