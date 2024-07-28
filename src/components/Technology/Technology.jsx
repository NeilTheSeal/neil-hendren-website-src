import "./Technology.css";

import PropTypes from "prop-types";

export default function Technology({ technology }) {
  return (
    <a className="technology" href={technology.link} target="_blank">
      <p>{technology.name}</p>
      <img src={technology.src} alt={technology.name} />
    </a>
  );
}

Technology.propTypes = {
  technology: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired, // Add the link property
  }).isRequired,
};
