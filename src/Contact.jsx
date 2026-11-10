
import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const whatsappNumber = "6288271075800";
  const emailAddress = "syahrulnotonegoro@gmail.com";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getMessage = () => {
    return `Halo Syahrul!

Nama: ${form.name}
Email: ${form.email}
Subjek: ${form.subject}

Pesan:
${form.message}`;
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(getMessage());
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please complete all fields first.");
      return;
    }

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(getMessage());

    window.location.href =
      `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h2>
            Contact <span>Me</span>
          </h2>
          <div className="contact-line"></div>
          <p>
            Feel free to contact me for project discussions,
            collaborations, or professional opportunities.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-information">

            <div className="contact-info-card">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div>
                <h3>Location</h3>
                <p>Pekanbaru, Riau, Indonesia</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <Phone />
              </div>
              <div>
                <h3>Phone / WhatsApp</h3>
                <p>+62 882-7107-5800</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <Mail />
              </div>
              <div>
                <h3>Email</h3>
                <p>syahrulnotonegoro@gmail.com</p>
              </div>
            </div>

          </div>

          <form className="contact-form" onSubmit={sendWhatsApp}>

            <div className="contact-input-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="contact-buttons">

              <button type="submit" className="contact-whatsapp-btn">
                <MessageCircle size={18} />
                Contact via WhatsApp
              </button>

              <button
                type="button"
                className="contact-email-btn"
                onClick={sendEmail}
              >
                <Send size={18} />
                Send via Email
              </button>

            </div>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
