import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p className="projects-subtitle">
        A collection of web development and IoT-based projects I have worked on.
      </p>

      <div className="project-grid">
        <div className="project-card">
          <h3>⏰ Smart Alarm Clock</h3>
          <p>
            An IoT-based smart alarm clock project built using embedded systems,
            sensors, and automation concepts.
          </p>

          <div className="project-tags">
            <span>IoT</span>
            <span>Arduino</span>
            <span>Automation</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a
              href="https://github.com/suchismitadas07/smart-alarm-clock"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>💻 Portfolio Website</h3>
          <p>
            A personal portfolio website built with React JS to showcase my
            skills, projects, and contact details.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a
              href="https://github.com/suchismitadas07/portfolio-website"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>🏠 Smart Home Automation</h3>
          <p>
            A beginner-friendly home automation project focused on IoT-based
            smart control systems.
          </p>

          <div className="project-tags">
            <span>IoT</span>
            <span>Smart Home</span>
            <span>Automation</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a
              href="https://github.com/suchismitadas07/smart-home-automation"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>💡 Bluetooth Controlled Light</h3>
          <p>
            A smart lighting project where lights are controlled wirelessly
            using Bluetooth and a mobile device.
          </p>

          <div className="project-tags">
            <span>Bluetooth</span>
            <span>IoT</span>
            <span>Lighting</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a
              href="https://github.com/suchismitadas07/bluetooth-controlled-light"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>🎙️ Voice Controlled Light</h3>
          <p>
            A voice-enabled automation project that controls lighting through
            voice commands for hands-free smart usage.
          </p>

          <div className="project-tags">
            <span>Voice Control</span>
            <span>Automation</span>
            <span>IoT</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a
              href="https://github.com/suchismitadas07/voice-controlled-light"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>🔥 Gas & Heat Detection System</h3>
          <p>
            A safety-focused IoT project designed to detect gas leakage and heat
            changes for early alert and protection.
          </p>

          <div className="project-tags">
            <span>Gas Sensor</span>
            <span>Safety</span>
            <span>IoT</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a
              href="https://github.com/suchismitadas07/gas-heat-detection-system"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;