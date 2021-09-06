import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="richad">
        <Link to="/" className="navlinks">
          Richad
        </Link>
      </div>
      <div className="other-navlinks">
        <Link to="/friendstrip" className="navlinks">
          About
        </Link>
        <Link to="/friendstrip" className="navlinks">
          FriendsTrip
        </Link>
        <Link to="/friendstrip" className="navlinks">
          Skills
        </Link>
        <Link to="/friendstrip" className="navlinks">
          ContactMe
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
