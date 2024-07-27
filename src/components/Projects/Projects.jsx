import "./Projects.css";
import Project from "/src/components/Project/Project.jsx";
import ProjectsData from "/src/data/projects.js";

console.log(ProjectsData);

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="projects-header">Notable Projects</h2>
      <Project project={ProjectsData[0]} />
      <Project project={ProjectsData[1]} />
      <Project project={ProjectsData[2]} />
    </section>
  );
}
