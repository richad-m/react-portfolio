import { Link } from "react-router-dom";
import "./sidebar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <a href="#">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="www.linkedin.fr">
        <i class="fab fa-github"></i>
      </a>
    </div>
  );
}

export default SideBar;
