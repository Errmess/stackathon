import React, { Component } from "react";
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import BedtimeStories from "./BedtimeStories";

class RoutePath extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/bedtimeStories" element={<BedtimeStories />} />
        </Routes>
      </div>
    );
  }
}

export default RoutePath;
