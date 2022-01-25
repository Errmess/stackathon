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

        <label for="menuToggle" class="menuOpen">
          <div class="open"></div>
        </label>

        <div class="menu menuEffects">
          <label for="menuToggle"></label>
          <div class="menuContent">
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
