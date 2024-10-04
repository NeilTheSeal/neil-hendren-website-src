import "./NavBar.css";
import NavButton from "./NavButton.jsx";

export default function NavBar() {
  return (
    <nav className="main-nav">
      <NavButton type="default" label="Home" destination="/" />
      <NavButton type="dropdown" label="Blog" />
    </nav>
  );
}
