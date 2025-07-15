import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting me, " + formData.name + "!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section" id="contact">
      <h1 className="contact-heading">Get in Touch</h1>
      <div className="contact-container">
        <div className="contact-left">
          <h2>
            I'm always open to new collaborations! Drop a message anytime.
          </h2>

          <div className="social-line">
            <FaTwitter className="icon" />
            <a
              href="https://x.com/SouravBhag14546"
              target="_blank"
              rel="noreferrer"
            >
              @SouravBhag14546
            </a>
          </div>

          <div className="social-line">
            <FaGithub className="icon" />
            <a
              href="https://github.com/souraav09"
              target="_blank"
              rel="noreferrer"
            >
              github.com/souraav09
            </a>
          </div>

          <div className="social-line">
            <FaLinkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/souravbhagat"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/souravbhagat
            </a>
          </div>
          <div className="social-line">
            <i className="icon fas fa-envelope" />
            <a href="mailto:souravbhagat035@gmail.com">
              souravbhagat035@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
