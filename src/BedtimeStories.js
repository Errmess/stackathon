import React from "react";
import { translateText } from "./Translate";
import { Link } from "react-router-dom";

export default class BedtimeStories extends React.Component {
  constructor(props) {
    super(props);
    const storyOne =
      "I was sitting in class the first time that I saw the frog. Miss Weaver had been my teacher for a few months, and was best known around Stagwood for having a stack of black hair that rose a foot above her head. Before the school year started, I’d heard rumors about her, and within a week I realized that they were all true. For one thing, she did, in fact, wear the same outfit every day; the colors changed, but she always had on striped pants and a striped jacket. For another thing, she was mind-numbingly boring. The kind of boring that makes your eyes shut without your permission. The biggest problem, though, was the stories. She was obsessed with tales of former students who had become some kind of famous. The first couple of times weren’t bad, maybe even kind of interesting, but by the second week of school she had started repeating herself, just like her outfits.";
    const storyTwo =
      "Gemma was only five minutes away from her parents’ hut, but the jungle had already taken on a different personality. It was thicker. The trees had grown taller. The ti plants shaded the green forest a sinister red. There was no doubt about it- the jungle was more dangerous here, and Gemma loved it. As a baby, Gemma’s parents had taken her on their expeditions over mountains, deserts, and vast seas. It was exciting, unpredictable, and deeply irresponsible. Now that they had settled down in the tropical rainforest, Gemma had to devise intricate plans just to sneak out for morning adventures.";
    const storyThree =
      "Follow two young explorers on a monorhyme (all the lines end in the same rhyme) adventure that takes you across the sea to the mysterious Island of Bum Bum Ba Loo. You'll meet the King and Queen, dance with Bum Bum Balites, and learn the secret to Bum Berry Goo! The only problem is finding your way back again...The Island of Bum Bum Ba Loo is a bedtime tale about discovery, with an ending to encourage the explorer in us all!";
    this.stories = [storyOne, storyTwo, storyThree];
    translateText(storyOne);
  }

  render() {
    return (
      <div className="all-view-bedtime-Stories">
        <h1>BEDTIME STORIES SECTION</h1>
        <div className="all-view-buttons">
          <button type="button" className="btn">
            English
          </button>
          <button type="button" className="btn">
            Spanish
          </button>
        </div>
        <div className="description">
          <img
            alt="book one"
            src="https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1505354946873-PPXGNW0RLQBXQTOGJ5ZU/Guardians+of+Lore+Cover+Image+All+Stories+for+Kids.jpeg?format=500w"
          />
          <p>{this.stories[0]}</p>
        </div>
        <div className="description">
          <img
            alt="book two"
            src="https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1585028651094-PCD0C1QXUIWV0FM0NFUT/Gemma+Cover+FCS.jpg?format=500w"
          />
          <p>{this.stories[1]}</p>
        </div>
        <div className="description">
          <img
            alt="book three"
            src="https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1590379327891-TAM0NSQIC75PG38DG0F2/Mr.+McKay+Cover+Smaller.jpg?format=500w"
          />
          <p>{this.stories[2]}</p>
        </div>
      </div>
    );
  }
}
