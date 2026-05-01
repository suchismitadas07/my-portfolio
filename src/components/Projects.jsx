import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "⏰ Smart Alarm Clock",
      summary: "An IoT-based smart alarm system with automation features.",
      about:
        "This project uses IoT concepts to create a smart alarm system with automation-based functionality.",
      image: "alarm.jpg",
      sourceCode: "#",
      demoVideo: "#",
    },
    {
      title: "💻 Portfolio Website",
      summary: "A modern React portfolio to showcase work and skills.",
      about:
        "This portfolio website is built using React JS with separate reusable components and responsive design.",
      image: "portfolio.png",
      sourceCode: "https://github.com/suchismitadas07/my-portfolio",
      demoVideo: "#",
    },
    {
      title: "🏠 Smart Home Automation",
      summary: "An IoT system for smart and connected home control.",
      about:
        "This project focuses on controlling home appliances using IoT-based automation methods.",
      image: "smart_home.png",
      sourceCode: "#",
      demoVideo: "#",
    },
    {
      title: "🚪 Smart Door System",
      summary: "A smart access system for secure automated door control.",
      about:
        "A security-focused smart door project designed for controlled and automated access.",
      image: "smart_door.png",
      sourceCode: "#",
      demoVideo: "#",
    },
    {
      title: "🪪 RFID Card Test System",
      summary: "An RFID-based card testing system for secure access verification.",
      about:
        "This project tests RFID cards and verifies access using RFID-based identification.",
      image: "rfid_car_testing.png",
      sourceCode: "#",
      demoVideo: "#",
    },
    {
      title: "🔎 ID Detection System",
      summary: "A smart identification system for detecting and verifying user IDs.",
      about:
        "This project focuses on detecting and verifying ID information for identification-based systems.",
      image: "rfid_card_id.png",
      sourceCode: "#",
      demoVideo: "#",
    },
    {
      title: "💡 Bluetooth Controlled Light",
      summary: "Wireless light control using Bluetooth connectivity.",
      about:
        "This project controls lights wirelessly through Bluetooth connection using a mobile device.",
      image: "bluetooth_light.png",
      sourceCode: "#",
      demoVideo: "#",
    },
    {
      title: "🎙️ Voice Controlled Light",
      summary: "Hands-free lighting system controlled by voice commands.",
      about:
        "A voice-based automation project where lights can be controlled using voice commands.",
      image: "voice_light.png",
      sourceCode: "#",
      demoVideo: "#",
    },
    {
      title: "🔥 Gas & Heat Detection System",
      summary: "A safety system for gas leakage and heat monitoring.",
      about:
        "This safety project detects gas leakage and heat changes to support early warning and protection.",
      image: "gas&heat_detect.png",
      sourceCode: "#",
      demoVideo: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p className="projects-subtitle">
        Click on any project to view full details, images, video, and source code.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>

            <div className="project-links">
              <button onClick={() => setSelectedProject(project)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay">
          <div className="project-modal">
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h2>{selectedProject.title}</h2>

            <div className="modal-section">
              <h4>About</h4>
              <p>{selectedProject.about}</p>
            </div>

            <div className="modal-section">
              <h4>Preview Image</h4>
              <div className="preview-box">
                <img
                  src={`/projects/${selectedProject.image}`}
                  alt={selectedProject.title}
                  className="project-preview-image"
                />
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={selectedProject.sourceCode}
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>

              <a
                href={selectedProject.demoVideo}
                target="_blank"
                rel="noreferrer"
              >
                Demo Video
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;