// import { useEffect } from "react";
import "./Technologies.css";
import TechContainer from "/src/components/TechContainer/TechContainer.jsx";
import TechnologiesData from "/src/data/technologies.js";

export default function Technologies() {
  // useEffect(() => {
  //   const bg = document.getElementById("technologies-bg");
  //   let scroll = window.scrollY;
  //   window.addEventListener("scroll", () => {
  //     if (scroll < window.scrollY) {
  //       bg.style.backgroundPosition = `0 ${window.scrollY / 2}px`;
  //     } else {
  //       bg.style.backgroundPosition = `0 ${window.scrollY / 2}px`;
  //     }
  //     scroll = window.scrollY;
  //   });
  // }, []);

  return (
    <section id="technologies">
      <div id="technologies-bg"></div>
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
