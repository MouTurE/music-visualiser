import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import "./visualiser.css";
import LeftArrow from "../Resources/left_arrow.png";

import {
  TextElement,
  ImageElement,
  PlayButtonElement,
} from "./Components/Element";

// The Actual Page
function visualiser() {
  const [activeElementId, setActiveElementId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleActivate = (id: string) => {
    setActiveElementId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.div
      initial={{ x: "200%" }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.3 }}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <button
        className="BackButton"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={LeftArrow} alt="" />
      </button>
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
    </motion.div>
  );
}

export default visualiser;
