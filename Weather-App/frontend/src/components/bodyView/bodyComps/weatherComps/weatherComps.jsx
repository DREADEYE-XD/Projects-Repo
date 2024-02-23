import React from "react";
import "./weatherComps.css";
import CurrWeather from "./currWeatherComps/currWeather";
import OtherWeather from "./aqiComps/otherWeather";

const WeatherComps = ({
  weatherData,
  weatherDataIcon,
  weatherDesc,
  averageTemps,
  aqiData,
  visibility,
  imgLoaderDict,
  currentImageIndex,
}) => {
  return (
    <>
        <div className="weatherData-comps">

          <CurrWeather
            name={weatherData.name}
            country={weatherData.sys.country}
            id={weatherData.weather[0].id}
            icon={weatherDataIcon}
            weatherDesc={weatherDesc}
            temp={weatherData.main.temp}
            temp_max={weatherData.main.temp_max}
            temp_min={weatherData.main.temp_min}
            feels_like={weatherData.main.feels_like}
            averageTemps={averageTemps}
          />
          <OtherWeather
            pressure={weatherData.main.pressure}
            humidity={weatherData.main.humidity}
            grnd_level={weatherData.main.grnd_level}
            wind_degrees={weatherData.wind.deg}
            wind_gust={weatherData.wind.gust}
            windSpeed={weatherData.wind.speed}
            aqiData={aqiData}
          />
        </div>
      
    </>
  );
};

export default WeatherComps;
