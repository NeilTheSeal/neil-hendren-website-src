import PropTypes from "prop-types";
import "./Project.css";
import GitHubLogo from "/src/assets/github-mark-white.svg";
import ExternalLink from "/src/assets/open-external-link-icon.svg";

export default function Project({ project }) {
  function githubLink() {
    if (project.github_link) {
      return (
        <a
          className="project-github-link"
          href={project.github_link}
          target="_blank"
        >
          <div>View on GitHub</div>
          <img src={GitHubLogo} alt="GitHub Logo" />
        </a>
      );
    }
  }

  return (
    <div className="project">
      <div className="project-container">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-description">
        <a className="project-link" href={project.link} target="_blank">
          <h3>{project.title}</h3>
          <img
            src={ExternalLink}
            alt="External Link"
            className="external-link"
          />
        </a>
        <p>{project.description}</p>
        {githubLink()}
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
