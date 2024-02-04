import React from "react";
import "./currWeather.css";
import ForecastIcns from "./forecastIcns";

/*
*For icon docs
https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
*/

const CurrWeather = ({
  name,
  country,
  id,
  icon,
  weatherDesc,
  temp,
  temp_max,
  temp_min,
  feels_like,
  averageTemps,
}) => {
  return (
    <div className="curr-weather-cont">
      <div className="loc-cont">
        {/* <img src="./icons/location.png" alt="" height="25" width="25" /> */}
        <h1 className="cityName">{name}</h1>
      </div>

      <div className="city-loc">
        <h3>{country}</h3>
      </div>

      <div className="currWthr">
        <img
          className="currWthrIcn"
          src={`./icons/weatherIcons/${icon}.svg`}
          alt=""
        />
        <h3 className="wthr-desc">{weatherDesc}</h3>
      </div>

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
        {averageTemps.map((element, index) => {
          return (
            <ForecastIcns
              day={averageTemps[index].date}
              icn={averageTemps[index].icon}
              temp={Math.round(averageTemps[index].averageTemp)}
            />
          );
        })}
      </ul>
      <p className="forecast-desc">
        {"Feels Like " + Math.round(feels_like) + "°"}
      </p>
    </div>
  );
};

export default CurrWeather;
