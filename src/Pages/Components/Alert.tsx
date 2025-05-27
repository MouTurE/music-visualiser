import { div } from "framer-motion/client";
import { useState } from "react";

interface AlertProps {
    headerText : string;
    messageText : string;
    alertActive : boolean;
    
}

function Alert ({headerText,messageText, alertActive}:AlertProps) {

  return (<div style={{position:"absolute", right:"8px", opacity: alertActive ? "100%":"0%"}} className="ContextBox">
    <h3>{headerText}</h3>
    <br />
    <p>{messageText}</p>
  </div>  );
}

export default Alert;