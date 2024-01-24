import React from "react";
import "./currWeather.css";

/*
*For icon docs
https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
*/

const currWeatherIcnbaseUrl = "https://openweathermap.org/img/wn/";
const currWeatherIcnterminalUrl = "@2x.png";
let currWeathericonCode = "10d";

const currWeatherUrl = `${currWeatherIcnbaseUrl}${currWeathericonCode}${currWeatherIcnterminalUrl}`;
const CurrWeather = () => {
  return (
    <div className="curr-weather-cont">
      <div className="loc-cont">
        <img src="./icons/location.png" alt="" height="25" width="25" />
        <h1 className="city">New Delhi</h1>
      </div>

      <h3 className="city-loc">UP, India</h3>

      <img
        className="currWthrIcn"
        src={currWeatherUrl}
        alt=""
        height="130"
        width="130"
      />

    
      <h3 className="wthr-desc">Sunny</h3>

      <div className="temp-cont">
        <h2 className="temp">20 C</h2>

        <div className="min-max">
          <img
            className="max-temp"
            src="./icons/up-arrow.gif"
            alt=""
            height="14"
            width="14"
          />
          <span>22</span>
          <img
            className="min-temp"
            src="./icons/up-arrow.gif"
            alt=""
            height="14"
            width="14"
          />
          <span>17</span>
        </div>
      </div>

      <ul className="forecast-icns">
        <li className="icn">
          <h4>Mon</h4>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            height="45"
            width="45"
          />
          <h4>22 C</h4>
        </li>
      </ul>
      <p className="forecast-desc">Feels like 20 C. Pleasant weather</p>
    </div>
  );
};

export default CurrWeather;
