import "./About.css";
import Climbing from "/src/assets/climbing.jpg";

export default function About() {
  return (
    <section id="about">
      <h2 className="about-header">About Me</h2>
      <div className="about-container">
        <div className="about-description">
          <div className="about-image">
            <img src={Climbing} alt="Climbing" />
          </div>
          <p>
            Hi! I&apos;m a full-stack software engineer with a background in
            chemical and biological engineering. I&apos;ve built production web
            applications, scientific simulations, and internal tools using
            modern JavaScript/TypeScript, React, and Node, with experience
            across cloud, data, and DevOps workflows. I specialize in writing
            clean, maintainable code, intuitive UX, and try to have a measurable
            impact—whether that&apos;s developing a secure web portal, designing
            small websites, creating scientific simulations, streamlining
            internal processes, or any other engineering work that the job might
            require. Outside of work, I lift, play volleyball, play piano and
            guitar, and practice chess. I&apos;m always looking for new ways to
            learn and grow my abilities and knowledge base.
          </p>
        </div>
      </div>
    </section>
  );
}
