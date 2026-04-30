import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "⏰ Smart Alarm Clock",
      summary: "IoT-based smart alarm system using sensors and automation.",
      detailsLink: "#",
    },
    {
      title: "💻 Portfolio Website",
      summary: "Personal portfolio website built with React JS.",
      detailsLink: "#",
    },
    {
      title: "🏠 Smart Home Automation",
      summary: "Smart control system for home automation using IoT.",
      detailsLink: "#",
    },
    {
      title: "💡 Bluetooth Controlled Light",
      summary: "Wireless light control using Bluetooth and mobile device.",
      detailsLink: "#",
    },
    {
      title: "🎙️ Voice Controlled Light",
      summary: "Hands-free light control system using voice commands.",
      detailsLink: "#",
    },
    {
      title: "🔥 Gas & Heat Detection System",
      summary: "Safety system for detecting gas leakage and heat changes.",
      detailsLink: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p className="projects-subtitle">
        Selected projects with detailed documentation, images, and videos.
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