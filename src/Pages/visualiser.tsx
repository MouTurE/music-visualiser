import { Link } from "react-router-dom";
import "./visualiser.css";
import PlayIconImage from "../Resources/play_icon.png";
import PauseIconImage from "../Resources/pause_icon.png";
import { useState } from "react";
import ContextBox from "./Components/ContextBox";

const CoverImage = () => {
  const [color, setColor] = useState("#000000");
  const [boxRadius, setBoxRadius] = useState(0);

  return (
    <div className="CoverImageFrame">
      <img src="" alt="Cover Image" />
    </div>
  );
};

const SongTitle = () => {
  const [visible, setVisible] = useState(true);
  const [color, setColor] = useState("#000000");

  const TitleStyle = {
    color: "black",
    display: visible ? "block" : "none",
  };

  return (
    <p
      contentEditable={true}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const element = e.currentTarget;
          const text = element.innerText.trim();
          if (text === "") {
            setVisible(false); // Hide via class
          } else {
            e.currentTarget.blur();
          }
        }
      }}
      className="SongTitle"
      style={TitleStyle}
    >
      {" "}
      Song Title{" "}
    </p>
  );
};

const PlayButton = () => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("#000000");

  return (
    <button
      onClick={() => {
        setActive(!active);
      }}
      className="PlayButton"
    >
      <img src={active === true ? PlayIconImage : PauseIconImage}></img>
    </button>
  );
};

// The Actual Page
function visualiser() {
  return (
    <div>
      <Link to="/"> Go back to HomePage</Link>
      <br />
      <br />
      <CoverImage />
      <SongTitle />
      <PlayButton />
      <br />

      <ContextBox
        titleText="Test"
        visible={true}
        options={[
          {
            labelText: "Value",
            optionType: "Value",
            onChange: (e) => {
              console.log("Value changed to: " + e.target.value);
            },
          },
          {
            labelText: "Test Button",
            optionType: "Button",
            onTrigger: () => {
              console.log("Button works");
            },
          },
          {
            labelText: "Test Button 2",
            optionType: "Button",
            onTrigger: () => {
              console.log("Button works");
            },
          },
        ]}
      />
    </div>
  );
}

export default visualiser;
