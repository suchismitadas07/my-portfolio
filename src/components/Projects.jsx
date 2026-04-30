import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "⏰ Smart Alarm Clock",
      detailsLink: "#",
    },
    {
      title: "💻 Portfolio Website",
      detailsLink: "#",
    },
    {
      title: "🏠 Smart Home Automation",
      detailsLink: "#",
    },
    {
      title: "🚪 Smart Door System",
      detailsLink: "#",
    },
    {
      title: "💡 Bluetooth Controlled Light",
      detailsLink: "#",
    },
    {
      title: "🎙️ Voice Controlled Light",
      detailsLink: "#",
    },
    {
      title: "🔥 Gas & Heat Detection System",
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