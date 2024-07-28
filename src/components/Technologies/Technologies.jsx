import "./Technologies.css";
import TechContainer from "/src/components/TechContainer/TechContainer.jsx";
import TechnologiesData from "/src/data/technologies.js";

export default function Technologies() {
  return (
    <section id="technologies">
      <h2 className="technologies-header">Technologies I Use</h2>
      <div className="technologies-backdrop">
        <TechContainer
          name="Languages and Markup"
          technologies={TechnologiesData.languages}
        />
        <TechContainer
          name="Frameworks"
          technologies={TechnologiesData.frameworks}
        />
        <TechContainer
          name="Libraries"
          technologies={TechnologiesData.libraries}
        />
        <TechContainer name="Tools" technologies={TechnologiesData.tools} />
        <TechContainer
          name="Operating Systems"
          technologies={TechnologiesData.os}
        />
        <TechContainer
          name="Command Line Utilities"
          technologies={TechnologiesData.command_line}
        />
        <TechContainer name="Testing" technologies={TechnologiesData.testing} />
        <TechContainer name="Design" technologies={TechnologiesData.design} />
        <TechContainer
          name="Deployment and Production"
          technologies={TechnologiesData.deployment}
        />
      </div>
    </section>
  );
}
