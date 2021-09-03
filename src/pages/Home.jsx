import { Link } from "react-router-dom";
import avatar from "../assets/avatar/avatar1.png";

function Home() {
  return (
    <div className="Home container-fluid">
      <header className="Home-header">
        <p>Home</p>
      </header>
      <div className="presentation">
        <div className="presentation-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
          temporibus laborum alias quidem, minima itaque voluptate laudantium
          quis nulla quisquam hic odio totam in, accusantium voluptatibus
          delectus perspiciatis expedita optio!
        </div>
        <img src={avatar} alt="RME" className="presentation-image" />
      </div>
    </div>
  );
}

export default Home;
