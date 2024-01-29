import React, { useState, useEffect } from "react";
import "./bodyView.css";
import CurrWeather from "./bodyComps/currWeatherComps/currWeather";
import axios from "axios";
import {
  defaultCurrentWeatherData,
  defualtAverageTemps,
  defaultForecastData,
} from "./defaultData";

// console.log("forecast: " + defaultForecastData[0].list[0].dt_txt);

const appId = "aa06c5bd726a3a36aaa80f484396993b";
const defaultURL = "https://api.openweathermap.org/data/2.5/";

const BodyView = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(defaultCurrentWeatherData);
  const [forecastData, setForecastData] = useState(defaultForecastData);
  const [averageTemps, setAverageTemps] = useState(defualtAverageTemps);

  const searchedData = () => {
    axios
      .get(`${defaultURL}weather?q=${cityName}&appid=${appId}&units=metric`)
      .then(async (response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${defaultURL}forecast?q=${cityName}&appid=${appId}&units=metric`)
      .then(async (response) => {
        setForecastData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(forecastData);

  //console.log(forecastData.list[0].dt_txt);
  useEffect(() => {
    const calculateAverageTemps = () => {
      const dailyTemps = {};

      forecastData.list.forEach((forecast) => {
        const currDate = new Date();
        currDate.setHours(0, 0, 0, 0);
        const rawDate = new Date(forecast.dt_txt);
        rawDate.setHours(0, 0, 0, 0);

        if (rawDate > currDate && forecast.sys.pod === "d") {
          const date = `${rawDate.getDate()}/${rawDate.getMonth() + 1}`;

          if (!dailyTemps[date]) {
            dailyTemps[date] = {
              temps: [forecast.main.temp],
              feels_like: [forecast.main.feels_like],
              temp_min: [forecast.main.temp_min],
              temp_max: [forecast.main.temp_max],
              pressure: [forecast.main.pressure],
              humidity: [forecast.main.humidity],
              descriptions: [forecast.weather[0].description],
              icons: [forecast.weather[0].icon],
              wind_speed: [forecast.wind.speed],
              wind_deg: [forecast.wind.deg],
              wind_gust: [forecast.wind.gust],
            };
          } else {
            dailyTemps[date].temps.push(forecast.main.temp);
            dailyTemps[date].feels_like.push(forecast.main.feels_like);
            dailyTemps[date].temp_min.push(forecast.main.temp_min);
            dailyTemps[date].temp_max.push(forecast.main.temp_max);
            dailyTemps[date].pressure.push(forecast.main.pressure);
            dailyTemps[date].humidity.push(forecast.main.humidity);
            dailyTemps[date].descriptions.push(forecast.weather[0].description);
            dailyTemps[date].icons.push(forecast.weather[0].icon);
            dailyTemps[date].wind_speed.push(forecast.wind.speed);
            dailyTemps[date].wind_deg.push(forecast.wind.deg);
            dailyTemps[date].wind_gust.push(forecast.wind.gust);
          }
        }
      });

      const averages = Object.entries(dailyTemps).map(([date, data]) => ({
        date,
        averageTemp:
          data.temps.reduce((sum, temp) => sum + temp, 0) / data.temps.length,
        feels_like:
          data.feels_like.reduce((sum, feel) => sum + feel, 0) /
          data.feels_like.length,
        temp_min: Math.min(...data.temp_min),
        temp_max: Math.max(...data.temp_max),
        pressure:
          data.pressure.reduce((sum, press) => sum + press, 0) /
          data.pressure.length,
        humidity:
          data.humidity.reduce((sum, humid) => sum + humid, 0) /
          data.humidity.length,
        description: data.descriptions[0], // Assuming the weather description is the same for the day
        icon: data.icons[0], // Assuming the weather icon is the same for the day
        wind_speed:
          data.wind_speed.reduce((sum, speed) => sum + speed, 0) /
          data.wind_speed.length,
        wind_deg:
          data.wind_deg.reduce((sum, deg) => sum + deg, 0) /
          data.wind_deg.length,
        wind_gust: Math.max(...data.wind_gust),
      }));

      setAverageTemps(averages);
    };

    if (forecastData.list) {
      calculateAverageTemps();
    }
  }, [forecastData]);

  const weatherDesc = weatherData.weather[0].description
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

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
        id={weatherData.weather[0].id}
        icon={weatherData.weather[0].icon}
        weatherDesc={weatherDesc}
        temp={weatherData.main.temp}
        temp_max={weatherData.main.temp_max}
        temp_min={weatherData.main.temp_min}
        feels_like={weatherData.main.feels_like}
        averageTemps={averageTemps}
      />
    </body>
  );
};

export default BodyView;
