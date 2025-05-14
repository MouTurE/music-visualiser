import { Link } from "react-router-dom";
import "./visualiser.css";
import PlayIconImage from "../Resources/play_icon.png";
import PauseIconImage from "../Resources/pause_icon.png";
import { useState } from "react";
import ContextBox from "./Components/ContextBox";
import {
  TextElement,
  ImageElement,
  PlayButtonElement,
} from "./Components/Element";

// The Actual Page
function visualiser() {
  const [activeElementId, setActiveElementId] = useState<string | null>(null);

  const handleActivate = (id: string) => {
    setActiveElementId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <Link to="/"> Back</Link>
      <br />
      <br />

      <ImageElement
        src=""
        elementId="CoverImage"
        onActivate={handleActivate}
        activeElementId={activeElementId}
      ></ImageElement>
      <TextElement
        elementId="SongTitle"
        onActivate={handleActivate}
        activeElementId={activeElementId}
        innerText="Song Title"
      ></TextElement>
      <PlayButtonElement
        elementId="PlayButton"
        onActivate={handleActivate}
        activeElementId={activeElementId}
      ></PlayButtonElement>
      <br />
    </div>
  );
}

export default visualiser;
