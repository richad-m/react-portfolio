import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navlinks">
        Home
      </Link>
      <Link to="/friendstrip" className="navlinks">
        Friendstrip
      </Link>
    </nav>
  );
}

export default Navbar;
