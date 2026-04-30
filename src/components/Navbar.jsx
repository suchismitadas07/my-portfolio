import "./Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="nav-brand">
        <img src={logo} alt="Logo" className="nav-logo" />
        Suchismita Das
      </h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;