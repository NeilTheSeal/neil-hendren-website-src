import About from "../About/About";
import Contact from "../Contact/Contact";
import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
import "./ContentList.css";

export default function ContentList() {
  return (
    <div className="content-list">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
