import React from "react";
import {translateText} from "./Translate";
import {translateTextEs} from "./TranslateEs";

export default class BedtimeStories extends React.Component {

  // constructor(props) {
  //   super(props);
  //     this.state = {
  //       storyOne: "",
  //     }
  //   }

  render() {

  let storyOne =
  "Érase una vez una niña llamada Cenicienta que vivía con su madrastra y dos hermanastras. La pobre Cenicienta tuvo que trabajar duro todo el día para que los demás pudieran descansar. Era ella quien tenía que despertarse cada mañana cuando todavía estaba oscuro y frío para encender el fuego. Era ella quien cocinaba las comidas. Fue ella quien mantuvo el fuego encendido. La pobre niña no podía mantenerse limpia, de todas las cenizas y cenizas junto al fuego.";

    return (
      <div>
        <div className="all-view-bedtime-Stories">
          <span id="all-view">Browse All Bedtime Stories</span>
          <div className="all-view-buttons">
            <button onClick={() => {storyOne = translateTextEs(storyOne)}}>English</button>
            <button onClick={() => {storyOne = translateText(storyOne)}}>Spanish</button>
          </div>
        </div>
        <h1>Bedtime Stories Section</h1>
        <p>{storyOne}</p>
      </div>
    );
  }
}
