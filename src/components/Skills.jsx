import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skills-category">
        <h3>Frontend Development</h3>
        <div className="skills-grid">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>Responsive Design</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools & Platforms</h3>
        <div className="skills-grid">
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Netlify</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>IoT & Automation</h3>
        <div className="skills-grid">
          <span>IoT Systems</span>
          <span>Arduino</span>
          <span>Sensor Integration</span>
          <span>Smart Automation</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Currently Exploring</h3>
        <div className="skills-grid">
          <span>AI Tools</span>
          <span>React Projects</span>
          <span>Frontend Best Practices</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;