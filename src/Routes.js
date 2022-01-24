import React, { Component} from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import BedtimeStories from "./BedtimeStories"

class Routes extends Component {

  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route exact path="/bedtimestories" component={BedtimeStories} />
          </Switch>
      </div>
    );
  }
}

export default Routes;
