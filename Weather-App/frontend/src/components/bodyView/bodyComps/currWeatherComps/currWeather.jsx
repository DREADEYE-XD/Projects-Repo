import React from "react";
import "./currWeather.css";
// import ForecastIcns from "./forecastIcns";




/*
*For icon docs
https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
*/

const CurrWeather = (props) => {
  

  // useEffect(() => {

  //     axios
  //       .get(currWeatherAPI)
  //       .then((response) => {
  //         setWeatherData(JSON(response.data));
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching weather data:", error);
  //       });

  // }, []);

  let apiLocation = props.name;
  let apiCountry = props.country;
  let apiWeatherDesc = props.weather.description;
  let apiIcon = props.weather.icon;
  let apiTemp = Math.round(props.main.temp);
  let apiMax = Math.round(props.main.temp_max);
  let apiMin = Math.round(props.main.temp_min);
  let apiFeelsLike = Math.round(props.main.feels_like);
  let apiPressure = Math.round(props.main.pressure);

  return (
    <div className="curr-weather-cont">
      <div className="loc-cont">
        <img src="./icons/location.png" alt="" height="25" width="25" />
        <h1 className="cityName">{apiLocation}</h1>
      </div>

      <h3 className="city-loc">{apiCountry}</h3>

      <img
        className="currWthrIcn"
        src={apiIcon}
        alt=""
        height="130"
        width="130"
      />

      <h3 className="wthr-desc">{apiWeatherDesc}</h3>

      <div className="temp-cont">
        <h2 className="temp">{apiTemp}°</h2>

        <div className="min-max">
          <img
            className="max-temp"
            src="./icons/up-arrow.gif"
            alt=""
            height="14"
            width="14"
          />
          <span>{apiMax}°</span>
          <img
            className="min-temp"
            src="./icons/up-arrow.gif"
            alt=""
            height="14"
            width="14"
          />
          <span>{apiMin}°</span>
        </div>
      </div>

      <ul className="forecast-icns">
        {/* <ForecastIcns day={day} icn={icnLink} temp={foreTemp} />
        <ForecastIcns day={day} icn={icnLink} temp={foreTemp} />
        <ForecastIcns day={day} icn={icnLink} temp={foreTemp} />
        <ForecastIcns day={day} icn={icnLink} temp={foreTemp} /> */}
      </ul>
      <p className="forecast-desc">{apiFeelsLike}</p>
    </div>
  );
};

export default CurrWeather;
