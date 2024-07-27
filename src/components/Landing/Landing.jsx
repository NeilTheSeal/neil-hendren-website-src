import Socials from "../Socials/Socials";
import "./Landing.css";
import Headshot from "/src/assets/headshot.png";

export default function Landing() {
  return (
    <section id="landing">
      <div className="landing-description">
        <div className="landing-logo">
          <div className="landing-name">
            <h1>Neil</h1>
            <h1>Hendren</h1>
            <Socials />
          </div>
          <img src={Headshot} alt="Headshot" />
        </div>
      </div>
    </section>
  );
}
