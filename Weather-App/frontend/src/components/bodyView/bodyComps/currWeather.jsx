import React from "react";
import "./currWeather.css";

const CurrWeather = () => {
  return (
    <div className="curr-weather-cont">
      <h2 className="temp">20 C</h2>
      <img src="" alt="" />
      <h1>New Delhi</h1>
      <ul className="forecast-icns">
        <li className="icn">1
          <img src="" alt="" />
        </li>
        <li className="icn">2
          <img src="" alt="" />
        </li>
        <li className="icn">3
          <img src="" alt="" />
        </li>
        <li className="icn">4
          <img src="" alt="" />
        </li>
      </ul>
      <p className="forecast-desc">Feels like 20 C. Pleasant weather</p>
    </div>
  );
};

export default CurrWeather;
