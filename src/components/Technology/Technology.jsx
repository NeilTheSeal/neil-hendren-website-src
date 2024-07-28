import "./Technology.css";

import PropTypes from "prop-types";

export default function Technology({ technology }) {
  return (
    <div className="technology">
      <p>{technology.name}</p>
      <img src={technology.src} alt={technology.name} />
    </div>
  );
}

Technology.propTypes = {
  technology: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
