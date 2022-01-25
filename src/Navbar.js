import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      // <nav className="container">
      //   <div className="nav-bar">
      //     <div className="burger"></div>
      //   </div>
      //   <a href="/">Home</a>
      //   <a href="/aboutUs">About Us</a>
      //   <a href="/bedtimeStories">Bedtime Stories</a>
      // </nav>
      <div id="menuArea">
        <input type="checkbox" id="menuToggle"></input>

        <label htmlFor="menuToggle" className="menuOpen">
          <div className="open"></div>
        </label>

        <div className="menu menuEffects">
          <label htmlFor="menuToggle"></label>
          <div className="menuContent">
            <ul>
              <li>
                {" "}
                <a href="/">Home</a>
              </li>
              <li>
                <a href="aboutus">About Us</a>
              </li>
              <li>
                <a href="bedtimeStories">Bedtime Stories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
