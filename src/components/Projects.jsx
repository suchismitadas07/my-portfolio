import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "⏰ Smart Alarm Clock",
      summary: "An IoT-based smart alarm system with automation features.",
      detailsLink: "#",
    },
    {
      title: "💻 Portfolio Website",
      summary: "A modern React portfolio to showcase work and skills.",
      detailsLink: "#",
    },
    {
      title: "🏠 Smart Home Automation",
      summary: "An IoT system for smart and connected home control.",
      detailsLink: "#",
    },
    {
      title: "🚪 Smart Door System",
      summary: "A smart access system for secure automated door control.",
      detailsLink: "#",
    },
    {
      title: "💡 Bluetooth Controlled Light",
      summary: "Wireless light control using Bluetooth connectivity.",
      detailsLink: "#",
    },
    {
      title: "🎙️ Voice Controlled Light",
      summary: "Hands-free lighting system controlled by voice commands.",
      detailsLink: "#",
    },
    {
      title: "🔥 Gas & Heat Detection System",
      summary: "A safety system for gas leakage and heat monitoring.",
      detailsLink: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p className="projects-subtitle">
        Click on any project to explore full details, images, videos, and source code.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>

            <div className="project-links">
              <a href={project.detailsLink} target="_blank" rel="noreferrer">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;