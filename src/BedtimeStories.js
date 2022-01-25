import React from "react";
import { translateText } from "./Translate";

export default class BedtimeStories extends React.Component {
  constructor(props) {
    super(props);
    const storyOne =
      "Once upon a time a girl named Cinderella lived with her stepmother and two stepsisters. Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire. It was she who cooked the meals. It was she who kept the fire going. The poor girl could not stay clean, from all the ashes and cinders by the fire.";
    this.stories = [storyOne];
    translateText(storyOne);
  }

  render() {
    return (
      <div>
        <div className="all-view-bedtime-Stories">
          <span id="all-view">Browse All Bedtime Stories</span>
          <div className="all-view-buttons">
            <button>English</button>
            <button>Spanish</button>
          </div>
        </div>
        <h1>Bedtime Stories Section</h1>
        <p>{this.stories[0]}</p>
      </div>
    );
  }
}
