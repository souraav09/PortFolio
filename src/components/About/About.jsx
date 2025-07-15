import React from "react";
import "./About.css";
import erenyeager from "../../assets/Eren jaeger.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img
            src={erenyeager}
            alt="pic"
            width={"200px"}
            style={{ borderRadius: "50%" }}
          />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm <span>Sourav Bhagat</span> — a passionate frontend
              developer with a strong foundation in HTML, CSS, and JavaScript. I
              specialize in building responsive, accessible, and user-friendly
              web applications that deliver clean design and smooth
              functionality across all devices.
            </p>
            <p>
              I'm currently focused on mastering React.js and creating
              impactful, real-world projects that solve problems and deliver
              great user experiences. I stay updated with modern development
              practices, follow accessibility standards, and love bringing
              designs to life with code. I'm always excited to collaborate,
              innovate, and push the web forward.
            </p>
          </div>

          <div className="about-skills">
            <h1> Skills</h1>
            <p>
              Here are the technologies and tools I've mastered to build modern
              web experiences. 💻
            </p>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
