import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import FriendsTrip from "./pages/Friendstrip";
import Footer from "./components/Footer/footer";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/friendstrip">
        <FriendsTrip />
      </Route>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
