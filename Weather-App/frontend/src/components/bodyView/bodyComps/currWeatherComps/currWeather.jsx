import React from "react";
import "./currWeather.css";
import ForecastIcns from "./forecastIcns";

/*
*For icon docs
https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
*/

const CurrWeather = ({ name, country, icon, weatherDesc, temp, temp_max, temp_min, feels_like, averageTemps }) => {
  console.log(averageTemps)
  return (
    <div className="curr-weather-cont">
      <div className="loc-cont">
        <img src="./icons/location.png" alt="" height="25" width="25" />
        <h1 className="cityName">{name}</h1>
      </div>

      <h3 className="city-loc">{country}</h3>

      <img
        className="currWthrIcn"
        src={"https://openweathermap.org/img/wn/"+ icon + "@2x.png"}
        alt=""
        height="130"
        width="130"
      />

      <h3 className="wthr-desc">{weatherDesc}</h3>

      <div className="temp-cont">
        <h2 className="temp">{Math.round(temp)}°</h2>

        <div className="min-max">
          <img
            className="max-temp"
            src="./icons/up-arrow.gif"
            alt=""
            height="14"
            width="14"
          />
          <span>{Math.round(temp_max)}°</span>
          <img
            className="min-temp"
            src="./icons/up-arrow.gif"
            alt=""
            height="14"
            width="14"
          />
          <span>{Math.round(temp_min)}°</span>
        </div>
      </div>

      <ul className="forecast-icns">
        <ForecastIcns date={averageTemps[1].date} icn={averageTemps[1].icon} />
        <ForecastIcns date={averageTemps[2].date} icn={averageTemps[2].icon} />
        <ForecastIcns date={averageTemps[3].date} icn={averageTemps[3].icon} />
        <ForecastIcns date={averageTemps[4].date} icn={averageTemps[4].icon} />
        <ForecastIcns date={averageTemps[5].date} icn={averageTemps[5].icon} />
      </ul>
      <p className="forecast-desc">{"Feels Like " + Math.round(feels_like) + "°"}</p>
    </div>
  );
};

export default CurrWeather;
