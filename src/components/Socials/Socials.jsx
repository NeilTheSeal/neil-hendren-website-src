import "./Socials.css";
import GitHubLogo from "/src/assets/github-mark-white.svg";
import LinkedInLogo from "/src/assets/linkedin-logo.svg";
import Resume from "/src/assets/Neil_Hendren_Full_Resume.pdf";
import CVLogo from "/src/assets/resume_icon.svg";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://linkedin.com/in/neilhendren/" target="_blank">
        <img src={LinkedInLogo} alt="LinkedIn" />
      </a>
      <a href="https://github.com/NeilTheSeal" target="_blank">
        <img src={GitHubLogo} alt="GitHub" />
      </a>
      <a href={Resume} target="_blank" className="resume-link">
        <img src={CVLogo} alt="Resume" />
      </a>
    </div>
  );
}
