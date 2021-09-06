import { Link } from "react-router-dom";
import avatar from "../assets/avatar/avatar1.png";
import SideBar from "../components/Sidebar/sidebar";

function Home() {
  return (
    <div className="Home container-fluid">
      <div className="sidebar">
        <SideBar></SideBar>
      </div>
      <div className="presentation">
        <div className="title-text">
          <div className="presentation-title">Yo, c'est riridu92izy</div>
          <div className="presentation-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            temporibus laborum alias quidem, minima itaque voluptate laudantium
            quis nulla quisquam hic odio totam in, accusantium voluptatibus
            delectus perspiciatis expedita optio!
          </div>
        </div>
        <img src={avatar} alt="RME" className="presentation-image" />
      </div>
    </div>
  );
}

export default Home;
