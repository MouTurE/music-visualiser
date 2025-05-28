import { useRef, useState } from "react";
import ContextBox from "./ContextBox";
import React from "react";
import PlayIconImage from "../../Resources/play_icon.png";
import PauseIconImage from "../../Resources/pause_icon.png";



export const TextElement = (props: {
  elementId: string;
  innerText: string;
  activeElementId: string | null;
  onActivate: (id: string) => void;
}) => {
  const [color, setColor] = useState("#D8D9DA");
  const [visible, setVisible] = useState(true);
  const [mousePos, setMousePos] = useState([0, 0]);

  const contextVisible = props.elementId === props.activeElementId;

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onActivate(props.elementId);
    setMousePos([e.clientX, e.clientY]);
  };

  return (
    <div className="SongTitle">
      <p
        contentEditable={true}
        onContextMenu={handleRightClick}
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
        style={{ color, display: visible ? "block" : "none" }}
      >
        {" "}
        Song Title{" "}
      </p>
      <ContextBox
        titleText="Song Title"
        visible={contextVisible}
        x={mousePos[0]}
        y={mousePos[1]}
        options={[
          {
            labelText: "Color",
            optionType: "Value",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setColor(e.currentTarget.value);
            },
          },
        ]}
      ></ContextBox>
    </div>
  );
};

export const ImageElement = (props: {
  elementId: string;
  src: string;
  activeElementId: string | null;
  onActivate: (id: string) => void;
}) => {
  const [color, setColor] = useState("#D8D9DA");
  const [borderThickness, setThickness] = useState(1);
  const [imageSrc, setImageSrc] = useState(props.src);
  const [mousePos, setMousePos] = useState([0, 0]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const contextVisible = props.elementId === props.activeElementId;

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onActivate(props.elementId);
    setMousePos([e.clientX, e.clientY]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result as string);
    };
    reader.readAsDataURL(file); // converts image to base64
  };

  return (
    <div>
      <div
        onContextMenu={handleRightClick}
        style={{ border: borderThickness + "px solid " + color }}
        className="CoverImageFrame"
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={imageSrc}
          alt="Cover Image"
        />
        <input
          ref={fileInputRef}
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <ContextBox
        titleText="Cover Image"
        visible={contextVisible}
        x={mousePos[0]}
        y={mousePos[1]}
        options={[
          {
            labelText: "Border Color",
            optionType: "Value",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setColor(e.currentTarget.value);
            },
          },
          {
            labelText: "Border Thickness",
            optionType: "Value",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setThickness(parseInt(e.currentTarget.value));
            },
          },
          {
            iconSrc: "",
            labelText: "Change Image",
            optionType: "Button",
            onTrigger: () => {
              fileInputRef.current?.click();
            },
          },
        ]}
      ></ContextBox>
    </div>
  );
};

export const PlayButtonElement = (props: {
  elementId: string;
  activeElementId: string | null;
  onActivate: (id: string) => void;

  onFileChange : (fileName?:string) => void;
  onVolumeChange : (amount?:number) => void;
  audioVolume? : number; 
  
}) => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("#19D55E");
  const [mousePos, setMousePos] = useState([0, 0]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const contextVisible = props.elementId === props.activeElementId;
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onActivate(props.elementId);
    setMousePos([e.clientX, e.clientY]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
 if (file && file.type.startsWith('audio/')) {
     
      if (active) {
        setActive(false);
      }
  
      console.log("Processing audio file...");
      const url = URL.createObjectURL(file);
      var fileName = file.name;
      fileName = fileName.replace(/\.mp3$/, "");
      setAudioUrl(url);
      
      
      props.onFileChange(fileName);
      console.log("Url changed successfuly");

    }
  };



  return (
    <div className="PlayButton">
      <button
        onContextMenu={handleRightClick}
        onClick={() => {
          setActive(!active);

         
          if (active == true && audioRef.current) {

           
            audioRef.current.play();
            console.log("Playing the music...");
          }else if (audioRef.current){
            audioRef.current?.pause();
            console.log("Music Stopped");
         
          } else if (audioRef.current == null) {
            console.log("No Audio File");
            props.onFileChange("[No Audio File]");
          }
           
      }}
        style={{ backgroundColor: color }}
      >
        <img src={active == true ? PlayIconImage : PauseIconImage}></img>
      </button>

      <input onChange={handleFileChange} ref={inputRef} style={{display:"none"}} type="file" name="audioFile" accept=".mp3,audio/mpeg" />

      <audio style={{display:"none"}}  ref={audioRef} src={audioUrl ?? undefined} controls />



      <ContextBox
        titleText="Play/Pause Button"
        x={mousePos[0]}
        y={mousePos[1]}
        visible={contextVisible}
        options={[
          {
            labelText: "Color",
            optionType: "Value",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setColor(e.currentTarget.value);
            },
          },{
            labelText: "Volume [%]",
            optionType: "Value",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
             


              
              if (audioRef.current) {
                var value = Number(e.currentTarget.value);
                var rate = 1;
                const percentage = (value / 100)/rate; 
                
                

                if (value > 0 && value <= rate * 100)
                  value = rate * percentage // interpolate between 1 and 0
                  
                  //console.log("volume changed to: " + value);
                  audioRef.current.volume = value;
              }
            }
            
          }, {
            labelText:"Upload Music",
            optionType:"Button",
            iconSrc:"",
            onTrigger: () => {
              inputRef.current?.click();
            }
          }
        ]}
      ></ContextBox>
    </div>
  );
};
