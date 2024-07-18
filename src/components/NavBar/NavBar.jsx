import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="main-nav">
      <img src="/src/assets/nh-logo.png" className="nav-logo"></img>
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
