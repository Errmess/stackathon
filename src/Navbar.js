import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {

    render() {
      const linkStyle = {
        color: "Black"
      }

      const guestLinks = (
        <div>
          <Link to="/" style={linkStyle}>
           Home
          </Link>
          <Link to="/aboutUs" style={linkStyle}>
            About Us
          </Link>
          <Link to="/bedtimestories" style={linkStyle}>
            Bedtime Stories
          </Link>
        </div>
      );

    return (
      <nav>
        {guestLinks}
      </nav>
    );
    }
};

export default Navbar;
