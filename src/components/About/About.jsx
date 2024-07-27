import "./About.css";
import Climbing from "/src/assets/climbing.png";

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
            chemical engineering. I have experience with JavaScript, React, Ruby
            on Rails, and PostgreSQL. I enjoy building web applications that are
            both visually appealing and user-friendly. I am also passionate
            about teaching and learning new technologies. When I&apos;m not
            coding, you can find me at the gym, playing guitar, rock climbing,
            or playing chess.
          </p>
        </div>
      </div>
    </section>
  );
}
