import React, { useState } from "react";
import "./options.css";
import OptionsLayer from "./optionsLayer";
const Options = () => {
  const [optionVisibility, setOptionVisibility] = useState(false);
  return (
    <>
      <div className="options" onClick={()=>{
        setOptionVisibility(!optionVisibility);
      }}>
        <div id="dot1" className="dots"></div>
        <div id="dot2" className="dots"></div>
        <div id="dot3" className="dots"></div>
      </div>

      <OptionsLayer optionVisibility={optionVisibility}/>
    </>
  );
};

export default Options;
