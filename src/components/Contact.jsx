import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Let’s Connect</h2>
      <p className="contact-subtext">
        Open to internships, collaborations, and exciting tech opportunities.
      </p>

      <div className="contact-box">
        <a
          href="mailto:rimisuchismitadas@gmail.com"
          className="contact-item"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <strong>📧 Email</strong>
            <span>rimisuchismitadas@gmail.com</span>
          </div>
          <small>Send Mail →</small>
        </a>

        <a
          href="tel:7479094527"
          className="contact-item"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <strong>📱 Phone</strong>
            <span>+91 7479094527</span>
          </div>
          <small>Call Now →</small>
        </a>

        <a
          href="https://www.google.com/maps/place/Kolkata"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <div>
            <strong>📍 Location</strong>
            <span>Kolkata, India</span>
          </div>
          <small>View Map →</small>
        </a>

        <a
          href="https://github.com/suchismitadas07"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <div>
            <strong>💻 GitHub</strong>
            <span>github.com/suchismitadas07</span>
          </div>
          <small>View Profile →</small>
        </a>

        <a
          href="https://www.linkedin.com/in/suchismitadas07"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <div>
            <strong>🔗 LinkedIn</strong>
            <span>linkedin.com/in/suchismitadas07</span>
          </div>
          <small>Connect →</small>
        </a>
      </div>
    </section>
  );
}

export default Contact;