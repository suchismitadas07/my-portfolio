import "./Hero.css";
import profilePic from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={profilePic} alt="Suchismita Das" className="profile-img" />

      <span className="hero-label">Available for Internships & Freelance</span>

      <h1>Hi, I am Suchismita Das</h1>

      <p>
        Frontend Developer passionate about building clean web experiences,
        IoT solutions, and smart AI-powered automation.
      </p>

      <div className="hero-socials">
        <a
          href="https://github.com/suchismitadas07"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/suchismitadas07"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:rimisuchismitadas@gmail.com">Email</a>
      </div>

      <div className="hero-buttons">
        <a href="#projects">View My Projects</a>
        <a href="#contact" className="secondary-btn">Contact Me</a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;