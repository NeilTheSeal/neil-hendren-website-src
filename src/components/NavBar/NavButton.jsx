import PropTypes from "prop-types";
import { useEffect } from "react";
import routes from "../../routes/routes.js";

const posts = routes.filter((route) => {
  return route.type === "post";
});

const dropdown = posts.map((post, i) => {
  return (
    <a href={post.uri} key={i}>
      {post.name}
    </a>
  );
});

export default function NavButton({ type, label }) {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });

    window.onclick = function (event) {
      if (!event.target.matches(".nav-button-label")) {
        dropdowns.forEach((dropdown) => {
          if (dropdown.classList.contains("active")) {
            dropdown.classList.remove("active");
          }
        });
      }
    };
  }, []);

  if (type === "dropdown") {
    return (
      <div className="nav-button dropdown">
        <button className="nav-button-label">{label}</button>
        <div className="dropdown-content">{dropdown}</div>
      </div>
    );
  } else {
    return <button className="nav-button">{label}</button>;
  }
}

NavButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
