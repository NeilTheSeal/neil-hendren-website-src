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
            Hi! I&apos;m a full-stack web developer with a background in
            chemical and biological engineering. I have experience with a number
            of different languages and frameworks, and I enjoy building web
            applications that are both visually appealing and user-friendly. I
            love science and engineering, and love finding creative ways to
            improve the performance and usability of my apps. At the University
            of Colorado, I built scientific simulations, teaching Chemical
            Engineering concepts to students. At CoBank, I work on the customer
            portals and supporting infrastructure. When I&apos;m not coding, I
            enjoy olympic lifting, volleyball, playing musical instruments, and
            chess. My goal is to continue to learn and grow as a developer, and
            to build applications that make a positive impact on the world.
          </p>
        </div>
      </div>
    </section>
  );
}
