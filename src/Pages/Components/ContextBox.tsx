import React from "react";
import "./ContextBox.css";

export interface OptionProps {
  iconSrc?: string;
  labelText: string;
  optionType: "Value" | "Button";
  onTrigger?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ContextBoxProps {
  titleText: string;
  visible: boolean;
  options: OptionProps[];
  x?: number | 0;
  y?: number | 0;
}

function ContextBox({ titleText, visible, options, x, y }: ContextBoxProps) {
 


  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: visible ? x + "px" : "0px",
        top: visible ? y + "px" : "0px",
      }}
      className="ContextBox"
    >
      <b>
        <h3>{titleText}</h3>
      </b>
      <br />
      {options.map((option) => (
        <ul className="OptionList">
          <li className="Option-Button">
            {option.optionType === "Button" ? (
              <button onClick={option.onTrigger}>
                {" "}
                {option.iconSrc != "" ? <img src={option.iconSrc}></img> : null}
                <label>{option.labelText}</label>
              </button>
            ) : (
              <div className="Option-Value">
                <label> {option.labelText}: </label>
                <input type="text" onChange={option.onChange} />
              </div>
            )}
          </li>
        </ul>
      ))}
      ;
    </div>
  );
}

export default ContextBox;
