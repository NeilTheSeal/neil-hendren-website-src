import Socials from "../Socials/Socials";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="about-description">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a software developer with a passion for creating web
            applications. I am proficient in JavaScript, React, and Node.js, and
            I am always looking to learn new technologies. I have a background
            in computer science and mathematics, and I am excited to apply my
            skills to new projects.
          </p>
        </div>
        <img src="/src/assets/headshot.png" alt="Headshot" />
      </div>
      <Socials />
    </section>
  );
}
