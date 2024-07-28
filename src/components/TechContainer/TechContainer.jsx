import PropTypes from "prop-types";
import "./TechContainer.css";
import Technology from "/src/components/Technology/Technology.jsx";

export default function TechContainer({ technologies, name }) {
  return (
    <div className="tech-container">
      <div className="tech-label">{name}</div>
      <div className="tech-list">
        {technologies.map((technology, i) => (
          <Technology key={i} technology={technology} />
        ))}
      </div>
    </div>
  );
}

TechContainer.propTypes = {
  technologies: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
