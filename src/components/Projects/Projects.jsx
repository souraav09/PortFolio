import React from "react";
import "./Projects.css";
import amazon from "../../assets/Screenshot from 2025-07-15 12-06-10.png";
import weather from "../../assets/Screenshot from 2025-07-15 12-28-10.png";
import chatbot from "../../assets/Screenshot from 2025-07-15 12-28-52.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "Amazon Clone",
      description:
        "An e-commerce UI clone of Amazon with cart, product cards, and responsive layout.",
      liveLink: "https://amazonbysourav.netlify.app",
      codeLink: "https://github.com/souraav09/react-Amazonn-clone.git",
      image: amazon,
    },
    {
      title: "Weather App",
      description:
        "It shows real-time weather data and updates dynamically based on user input, with clear error handling for invalid searches. it's show speed and humidity",
      liveLink: "https://weatherappbysourav.netlify.app",
      codeLink: "https://github.com/souraav09/react-Weather-App.git",
      image: weather,
    },
    {
      title: "AI Chatbot",
      description:
        "An AI-powered chatbot interface using React and OpenAI/Gemini API.",
      liveLink: "https://souravchatbot.netlify.app/",

      codeLink: "https://github.com/souraav09/react-Chatbot.git",
      image: chatbot,
    },
  ];

  return (
    <div className="projects" id="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt style={{ marginRight: "8px" }} />
                View Project
              </a>

              <a href={project.codeLink} target="_blank" rel="noreferrer">
                <FaGithub style={{ marginRight: "8px" }} />
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
