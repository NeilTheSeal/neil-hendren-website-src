import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger.jsx";
import NavButton from "../NavButton/NavButton.jsx";
import Socials from "../Socials/Socials.jsx";
import "./NavBar.css";

export default function NavBar() {
  const [hamburgerPressed, setHamburgerPressed] = useState(false);

  const navButtonClassName = hamburgerPressed ? "active" : "";

  return (
    <nav className="main-nav">
      <Hamburger
        hamburgerPressed={hamburgerPressed}
        setHamburgerPressed={setHamburgerPressed}
      />
      <div id="brand-name">Neil Hendren</div>
      <div id="nav-buttons" className={navButtonClassName}>
        <NavButton type="default" label="Home" destination="/" />
        <NavButton type="dropdown" label="Blog Posts" />
      </div>
      <Socials />
    </nav>
  );
}
