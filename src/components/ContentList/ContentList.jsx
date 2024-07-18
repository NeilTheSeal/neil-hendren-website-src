import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import "./ContentList.css";

export default function ContentList() {
  return (
    <div className="content-list">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
