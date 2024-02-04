import React from "react";
import "./otherWeather.css";

const OtherWeather = (props) => {
  console.log(props);
  return (
    <div className="other-weather-cont">
      <div className="aqi-cont">
        <h4>Air Quality Index</h4>
        <span>400</span>
        <div className="aqi-color"></div>
      </div>

      <div className="humditynPressure">
        <div className="humidity-cont">
          <img
            src="./icons/humidity.png"
            alt=""
            srcset=""
            height="35"
            width="35"
          />

          <span>{props.humidity}</span>
        </div>
        <div className="pressure-cont">
          <img
            src="./icons/pressure.png"
            alt=""
            srcset=""
            height="30"
            width="30"
          />

          <span>{props.pressure}</span>
        </div>
      </div>

      <div className="wind-cont">
        <div className="speed">
          <img
            src="./icons/animation-ready/wind.svg"
            alt="./icons/animation-ready/not-available.svg"
            srcset=""
            height="45"
            width="45"
          />
          <span>{props.windSpeed}</span>
        </div>
        <div className="degrees">
          <img
            src="./icons/direction-arrow.png"
            alt=""
            srcset=""
            height="35"
            width="35"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherWeather;
