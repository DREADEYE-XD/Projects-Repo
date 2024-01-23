import React from "react";
import "./bodyView.css";
import CurrWeather from "./bodyComps/currWeather";

const BodyView = () => {
  

  
  return (
    <body>
      <input type="text" placeholder="Enter a place"/>
      <CurrWeather />
    </body>
  );
};

export default BodyView;
