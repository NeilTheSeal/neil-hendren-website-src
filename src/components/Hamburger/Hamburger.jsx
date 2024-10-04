import PropTypes from "prop-types";
import { useEffect } from "react";
import "./Hamburger.css";
import HamburgerIcon from "/src/assets/hamburger.svg";

export default function Hamburger({ hamburgerPressed, setHamburgerPressed }) {
  const handleHamburgerClick = () => {
    setHamburgerPressed(!hamburgerPressed);
  };

  /* Close the hamburger menu if the user clicks outside of it */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        e.target.id !== "hamburger" &&
        e.target.tagName !== "IMG" &&
        !e.target.classList.contains("nav-button") &&
        !e.target.classList.contains("dropdown") &&
        !e.target.classList.contains("dropdown-link") &&
        !e.target.classList.contains("nav-button-label")
      ) {
        setHamburgerPressed(false);
      }
    };

    if (hamburgerPressed) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [hamburgerPressed, setHamburgerPressed]);

  return (
    <div id="hamburger" onClick={handleHamburgerClick}>
      <img src={HamburgerIcon} alt="Hamburger Menu" />
    </div>
  );
}

Hamburger.propTypes = {
  hamburgerPressed: PropTypes.bool.isRequired,
  setHamburgerPressed: PropTypes.func.isRequired,
};
