import "./NavBar.css";
import NavButton from "./NavButton.jsx";

export default function NavBar() {
  return (
    <nav className="main-nav">
      <ul className="nav-links">
        <li>
          <NavButton type="default" label="Home" />
        </li>
        <li>
          <NavButton type="dropdown" label="Blog" />
        </li>
      </ul>
    </nav>
  );
}
