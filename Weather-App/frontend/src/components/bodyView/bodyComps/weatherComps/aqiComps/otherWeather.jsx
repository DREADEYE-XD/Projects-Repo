import React from "react";
import "./otherWeather.css";

const OtherWeather = (props) => {
  const colors = {
    green: "55a630",
    yellow: "ffea00",
    orange: "f77f00",
    red: "d00000",
    purple: "9d4edd",
    Maroon: "720026",
    Brown: "774936",
  }
  let AQIColor = "6c757d";

  if(props.aqiData > 0 && props.aqiData <= 50){
    AQIColor = colors.green
  }
  else if(props.aqiData > 50 && props.aqiData <= 100){
    AQIColor = colors.yellow
  }
  else if(props.aqiData > 100 && props.aqiData <= 150){
    AQIColor = colors.orange
  }
  else if(props.aqiData > 150 && props.aqiData <= 200){
    AQIColor = colors.red
  }
  else if(props.aqiData > 200 && props.aqiData <= 300){
    AQIColor = colors.purple
  }
  else if(props.aqiData > 301 && props.aqiData <= 400){
    AQIColor = colors.Maroon
  }
  else if(props.aqiData > 400 && props.aqiData <= 500){
    AQIColor = colors.Brown
  }

  

  return (
    <div className="other-weather-cont">
      <div className="aqi-cont">
        <h4>Air Quality Index</h4>
        {props.aqiData !== undefined ? (
          <>
            <span>{props.aqiData}</span>
            <div
              className="aqi-color"
              style={{
                backgroundColor: `#${AQIColor}`,
              }}
            ></div>
          </>
        ) : (
          <span>Data not available</span>
        )}
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
            alt=""
            srcset=""
            height="45"
            width="45"
          />
          <span>{props.windSpeed}</span>
        </div>
        <div className="degrees">
          <img
            src="./icons/direction-arrow.png"
            style={{
              transform: `rotate(${-45+(props.wind_degrees)}deg)`,
            }}
            alt=""
            srcset=""
            height="30"
            width="30"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherWeather;
