import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./visualiser.css";
import LeftArrow from "../Resources/left_arrow.png";
import Alert from "./Components/Alert";

import {
  TextElement,
  ImageElement,
  PlayButtonElement,
} from "./Components/Element";

// The Actual Page
function visualiser() {
  const [activeElementId, setActiveElementId] = useState<string | null>(null);
  
  const [alertHeader, UpdateAlertHeader] = useState("Message Text Here");
  const [alertMessage, UpdateAlertMessage] = useState("Header Text Here");
  const [alertActive, alertSetActive] = useState(false);
  
  const [musicVolume, setMusicVolume] = useState<number>(1);
  const navigate = useNavigate();

  const handleActivate = (id: string) => {
    setActiveElementId((prev) => (prev === id ? null : id));
  };

  const triggerAlert = (header: string, message:string) => {
    UpdateAlertHeader(header);
    UpdateAlertMessage(message);
    alertSetActive(true);
    const timer = setTimeout(() => {
      alertSetActive(false);
    }, 2.25 * 1000);
    
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerAlert("Hello!", "Right click on a component to modify it");
    }, 0.5 * 1000);
  }, []);

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

      <Alert headerText={alertHeader} messageText={alertMessage} alertActive={alertActive} />  


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
        onFileChange={(fileName) =>{triggerAlert("Music Changed To:", fileName ?? "")}}
        audioVolume={musicVolume? musicVolume: 1}
        onVolumeChange={(amount) =>{
          setMusicVolume(Number(amount))
        }}
      ></PlayButtonElement>
      <br />
    </motion.div>
  );
}

export default visualiser;
