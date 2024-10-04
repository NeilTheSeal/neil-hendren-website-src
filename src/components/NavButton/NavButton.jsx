import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./NavButton.css";
import routes from "/src/routes/routes.js";

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
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleHoverOverDropdown = () => {
    setDropdownActive(true);
  };

  const handleTouchDropdown = () => {
    setDropdownActive(true);
  };

  const handleDeactivateDropdown = (e) => {
    if (
      e.target.classList.contains("dropdown") ||
      e.target.classList.contains("dropdown-content") ||
      e.target.classList.contains("nav-button-label") ||
      e.target.classList.contains("dropdown-link") ||
      e.target.classList.contains("down-arrow")
    ) {
      return;
    }
    setDropdownActive(false);
  };

  const dropdownClassName = dropdownActive
    ? "nav-button dropdown active"
    : "nav-button dropdown";

  const dropdownContentClassName = dropdownActive
    ? "dropdown-content active"
    : "dropdown-content";

  useEffect(() => {
    if (dropdownActive) {
      document.addEventListener("mouseover", handleDeactivateDropdown);
      document.addEventListener("touchstart", handleDeactivateDropdown);
    } else {
      document.removeEventListener("mouseover", handleDeactivateDropdown);
      document.removeEventListener("touchstart", handleDeactivateDropdown);
    }

    return () => {
      document.removeEventListener("mouseover", handleDeactivateDropdown);
      document.removeEventListener("touchstart", handleDeactivateDropdown);
    };
  }, [dropdownActive]);

  if (type === "dropdown") {
    return (
      <div
        className={dropdownClassName}
        onMouseEnter={handleHoverOverDropdown}
        onTouchStart={handleTouchDropdown}
      >
        <button className="nav-button-label">
          {label} <div className="down-arrow">&#x2304;</div>
        </button>
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
