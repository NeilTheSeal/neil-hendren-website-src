import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import routes from "../../routes/routes.js";

const posts = routes.filter((route) => {
  return route.type === "post";
});

const dropdownLinks = posts.map((post, i) => {
  return (
    <a className="dropdown-link" href={post.uri} key={i}>
      {post.name}
    </a>
  );
});

export default function NavButton({ type, label, destination }) {
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const handleHoverOverDropdown = () => {
    setDropdownHovered(true);
  };

  const handleHoverOutsideDropdown = (e) => {
    if (
      e.target.classList.contains("dropdown") ||
      e.target.classList.contains("dropdown-content") ||
      e.target.classList.contains("nav-button-label") ||
      e.target.classList.contains("dropdown-link")
    ) {
      return;
    }
    setDropdownHovered(false);
  };

  const dropdownClassName = dropdownHovered
    ? "nav-button dropdown active"
    : "nav-button dropdown";

  const dropdownContentClassName = dropdownHovered
    ? "dropdown-content active"
    : "dropdown-content";

  useEffect(() => {
    if (dropdownHovered) {
      document.addEventListener("mouseover", handleHoverOutsideDropdown);
    } else {
      document.removeEventListener("mouseover", handleHoverOutsideDropdown);
    }

    return () => {
      document.removeEventListener("mouseover", handleHoverOutsideDropdown);
    };
  }, [dropdownHovered]);

  if (type === "dropdown") {
    return (
      <div className={dropdownClassName} onMouseEnter={handleHoverOverDropdown}>
        <button className="nav-button-label">{label}</button>
        <div className={dropdownContentClassName}>{dropdownLinks}</div>
      </div>
    );
  } else {
    return (
      <a className="nav-button-link" href={destination}>
        <div className="nav-button">
          <button className="nav-button-label">{label}</button>
        </div>
      </a>
    );
  }
}

NavButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  destination: PropTypes.string,
};
