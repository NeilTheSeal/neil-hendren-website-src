import "./NavBar.css";
import Logo from "/src/assets/nh-logo.png";

export default function NavBar() {
  return (
    <nav className="main-nav">
      <img src={Logo} className="nav-logo"></img>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
