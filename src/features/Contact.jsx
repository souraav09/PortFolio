import React from "react";
import "../styles/Contact.css";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Thanks for contacting me, ${data.name}!`);
    reset(); 
  };

  return (
    <div className="contact-section" id="contact">
      <h1 className="contact-heading">Get in Touch</h1>
      <div className="contact-container">
        <div className="contact-left">
          <h2>I'm always open to new collaborations! Drop a message anytime.</h2>

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

        
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}

          <textarea
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p className="form-error">{errors.message.message}</p>}

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
