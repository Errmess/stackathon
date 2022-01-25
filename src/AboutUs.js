import React from "react";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <h1>BEDTIME STORYTELLERS</h1>
        <p className="about">
          This site is meant to provide bedtime stories in various languages
          with the help of Microsoft Azure Translator API! Currently, we only
          have English and Spanish languages. But we hope to provide a lot more
          languages in the near future! Eventually, we want to implement text to
          voice API to make it even easier to hear these wonderful bedtime
          stories.
        </p>
        <h2>Meet our team:</h2>
        <div className="us">
          <h3>Seldon and Tenzin</h3>
        </div>
      </div>
    );
  }
}
