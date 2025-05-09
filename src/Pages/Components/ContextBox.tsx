import React, { Children, ReactNode } from "react";
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
}

function ContextBox({ titleText, visible, options }: ContextBoxProps) {
  const optionStyle = {
    listStyle: "none",
    padding: "5px",
  };

  const buttonStyle = { border: "none" };

  if (!visible) return null;

  return (
    <div className="ContextBox">
      <b>
        <h3>{titleText}</h3>
      </b>
      <br />
      {options.map((option) => (
        <ul className="OptionList">
          <li className="Option-Button">
            {option.optionType === "Button" ? (
              <button onClick={option.onTrigger}>{option.labelText}</button>
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
