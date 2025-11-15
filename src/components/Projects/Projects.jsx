import "./Projects.css";
import Project from "/src/components/Project/Project.jsx";
import ProjectsData from "/src/data/projects.js";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="projects-header">Public Projects</h2>
      {ProjectsData.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </section>
  );
}
