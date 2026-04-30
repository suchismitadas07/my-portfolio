import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Learning />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;