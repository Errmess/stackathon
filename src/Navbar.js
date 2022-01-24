import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    const linkStyle = {
      color: "Black",
    };

    return (
      <nav>
        <div className="nav-bar">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/aboutUs" style={linkStyle}>
            About Us
          </Link>
          <Link to="/bedtimeStories" style={linkStyle}>
            Bedtime Stories
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
