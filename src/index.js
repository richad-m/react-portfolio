import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import FriendsTrip from "./pages/Friendstrip";
import Footer from "./components/Footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/friendstrip">
        <FriendsTrip />
      </Route>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
