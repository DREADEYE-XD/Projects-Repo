import React from "react";
import "./currWeather.css";
// import ForecastIcns from "./forecastIcns";

/*
*For icon docs
https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
*/

const CurrWeather = (props) => {

  return (
    <div className="curr-weather-cont">
      <div className="loc-cont">
        <img src="./icons/location.png" alt="" height="25" width="25" />
        <h1 className="cityName">{props.name}</h1>
      </div>

      <h3 className="city-loc">{props.country}</h3>

      <img
        className="currWthrIcn"
        src={"https://openweathermap.org/img/wn/"+ props.icon + "@2x.png"}
        alt=""
        height="130"
        width="130"
      />

      <h3 className="wthr-desc">{props.weatherDesc}</h3>

      <div className="temp-cont">
        <h2 className="temp">{Math.round(props.temp)}°</h2>

        <div className="min-max">
          <img
            className="max-temp"
            src="./icons/up-arrow.gif"
            alt=""
            height="14"
            width="14"
          />
          <span>{Math.round(props.temp_max)}°</span>
          <img
            className="min-temp"
            src="./icons/up-arrow.gif"
            alt=""
            height="14"
            width="14"
          />
          <span>{Math.round(props.temp_min)}°</span>
        </div>
      </div>

      <ul className="forecast-icns">
        {/* <ForecastIcns day={day} icn={icnLink} temp={foreTemp} />
        <ForecastIcns day={day} icn={icnLink} temp={foreTemp} />
        <ForecastIcns day={day} icn={icnLink} temp={foreTemp} />
        <ForecastIcns day={day} icn={icnLink} temp={foreTemp} /> */}
      </ul>
      <p className="forecast-desc">{"Feels Like " + Math.round(props.feels_like) + "°"}</p>
    </div>
  );
};

export default CurrWeather;
