import React, { useState } from "react";
import "./bodyView.css";
import CurrWeather from "./bodyComps/currWeatherComps/currWeather";
import axios from "axios";

const appId = "aa06c5bd726a3a36aaa80f484396993b";
const defaultURL = "https://api.openweathermap.org/data/2.5/";
const defaultData = {
  weather: [{ id: "", main: "", description: "", icon: "" }],

  main: {
    temp: "",
    feels_like: "",
    temp_min: "",
    temp_max: "",
    pressure: "",
    humidity: "",
    sea_level: "",
    grnd_level: "",
  },
  wind: { speed: "", deg: "", gust: "" },
  clouds: { all: "" },
  dt: "",
  sys: {
    type: "",
    id: "",
    country: "",
    sunrise: "",
    sunset: "",
  },
  timezone: "",
  id: "",
  name: "",
  cod: "",
};

const BodyView = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(defaultData);
  const [forecastData, setForecastData] = useState(defaultData);

  //const currWeatherAPI = ``;

  const searchedData = () => {
    axios
      .get(
        `${defaultURL}weather?q=${cityName}&appid=${appId}&units=metric`
      )
      .then(async (response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      //forecast?q={city name}&appid={API key}

    axios
      .get(
        `${defaultURL}forecast?q=${cityName}&appid=${appId}&units=metric`
      )
      .then(async (response) => {
        setForecastData(response.data);
      })
      .catch((error) => {
        console.log(error);
      }); 
  };

  console.log(forecastData);

  return (
    <body>
      <input
        type="text"
        placeholder="Enter a place"
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      />
      <button onClick={searchedData}>Submit</button>
      <CurrWeather 
        name={weatherData.name}
        country={weatherData.sys.country}
        icon={weatherData.weather[0].icon}
        weatherDesc={weatherData.weather[0].description}
        temp={weatherData.main.temp}
        temp_max={weatherData.main.temp_max}
        temp_min={weatherData.main.temp_min}
        feels_like={weatherData.main.feels_like}
      />
    </body>
  );
};

export default BodyView;
