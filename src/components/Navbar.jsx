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
  <a href="#about"><span></span>About</a>
  <a href="#skills"><span></span>Skills</a>
  <a href="#projects"><span></span>Projects</a>
  <a href="#contact"><span></span>Contact</a>
</div>
    </nav>
  );
}

export default Navbar;